const Bus = require("../model/Bus");
const asyncHandler = require("express-async-handler");

const priceByNoOfHalts = require("../utils/priceByNoOfHalts");
const dayjs = require("dayjs");

const search = asyncHandler(async (req, res) => {
  const { from, to, date, isToday } = req.body;
  if (!from || !to || !date)
    return res.status(400).json({ message: "Missing fields" });

  if (from === to)
    return res.status(400).json({ message: "From and To cannot be the same" });

  const buses = await Bus.find();
  if (!buses) return res.sendStatus(404);

  const busesArray = [];

  buses.forEach((bus) => {
    for (let i = 0; i < bus.route.length; i++) {
      if (bus.route[i].city === from) {
        for (let j = i + 1; j < bus.route.length; j++) {
          if (bus.route[j].city === to) {
            if (
              bus.seats[53].availability.find(
                //53 seat is always available
                (obj) => obj.date === dayjs(date).format("YYYY-MM-DD")
              )
            ) {
              busesArray.push(bus);
              break;
            }
          }
        }
        break;
      }
    }
  });

  if (!busesArray.length) return res.sendStatus(204);

  //sorting the busesArray by arrivalTime
  let sortedArray = busesArray.sort(
    (a, b) =>
      parseFloat(a.route.find((obj) => obj.city === from).arrivalTime) -
      parseFloat(b.route.find((obj) => obj.city === from).arrivalTime)
  );

  //setting the searchedDepartureTime, searchedArrivalTime, thisBusPrice, actualPrice
  for (let i = 0; i < sortedArray.length; i++) {
    let bus = sortedArray[i].toObject();
    bus.route.forEach((obj) => {
      if (obj.city === from) {
        bus = {
          ...bus,
          searchedDepartureTime: obj.departureTime,
        };
      }
      if (obj.city === to) {
        let actualPrice = priceByNoOfHalts[obj.halts];
        let thisBusPrice = 0;
        if (obj.halts > bus.minHalts) {
          thisBusPrice = actualPrice;
        } else {
          thisBusPrice = priceByNoOfHalts[bus.minHalts];
        }
        bus = {
          ...bus,
          searchedArrivalTime: obj.arrivalTime,
          thisBusPrice,
          actualPrice,
        };
      }
    });
    sortedArray[i] = bus;
  }

  //remove busses which has lower searchedDepartureTime than busFrom.departureTime
  if (isToday) {
    sortedArray = sortedArray.filter((bus) => {
      return (
        parseFloat(bus.searchedDepartureTime) >=
        parseFloat(bus.busFrom.departureTime)
      );
    });
  } else {
    sortedArray = sortedArray.filter((bus) => {
      return (
        parseFloat(bus.searchedDepartureTime) <=
        parseFloat(bus.busFrom.departureTime)
      );
    });
  }

  let arrayOfBussesAfterAvailableSeatsChecking = [];
  //finding no of seats available and give property to each seat as availabilityBoolean

  for (let i = 0; i < sortedArray.length; i++) {
    let bus = sortedArray[i];
    let totalAvailableSeats = 0;

    for (let j = 0; j < bus.seats.length; j++) {
      let seat = bus.seats[j];
      seat.availabilityBoolean = false;
      if (!seat.isBookable) {
        continue;
      }

      console.log(seat.seatNumber);
      console.log(totalAvailableSeats);
      // all the seats are bookable. j+1 is a bookable seat
      //find the available date for the seat
      for (let k = 0; k < seat.availability.length; k++) {
        if (seat.availability[k].date !== dayjs(date).format("YYYY-MM-DD")) {
          continue;
        }
        console.log(seat.availability[k].date);
        console.log(totalAvailableSeats);
        //this point availability date object is found. that object will be seat.availability[k]
        let booked = seat.availability[k].booked; // this is a array of objects
        //iterate through the booked array
        for (let l = 0; l < booked.length; l++) {
          //continue untill booked object.city === from
          if (booked[l].city !== from) {
            continue;
          }

          //when booked object.city === from
          if (!booked[l].take) {
            //when take false if true.
            let x = l + 1;
            let isgoneThrough = false;
            while (x < booked.length && booked[x].city !== to) {
              //while flase when booked[x].city === to
              if (booked[x].take) {
                isgoneThrough = true;
                break;
              }
              x++;
            }
            if (!isgoneThrough) {
              seat.availabilityBoolean = true;
              totalAvailableSeats++;
            }
            break;
          } else if (booked[l].take && !booked[l + 1].take) {
            //when take true this execute

            let x = l + 1;
            let isgoneThrough = false;
            while (x < booked.length && booked[x].city !== to) {
              if (booked[x].take) {
                isgoneThrough = true;
                break;
              }
              x++;
            }
            if (!isgoneThrough) {
              seat.availabilityBoolean = true;
              totalAvailableSeats++;
            }
            break;
          } else {
            break;
          }
        }
      }
    }
    bus = {
      ...bus,
      totalAvailableSeats,
    };
    arrayOfBussesAfterAvailableSeatsChecking.push(bus);
  }

  console.log(arrayOfBussesAfterAvailableSeatsChecking);
  console.log(arrayOfBussesAfterAvailableSeatsChecking[0].seats[53]);
  console.log(
    arrayOfBussesAfterAvailableSeatsChecking[0].seats[53].availabilityBoolean
  );
  console.log(
    arrayOfBussesAfterAvailableSeatsChecking[0].seats[45].availabilityBoolean
  );
  res.json(arrayOfBussesAfterAvailableSeatsChecking);
});

module.exports = { search };
