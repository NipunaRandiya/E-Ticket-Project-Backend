const priceByNoOfHalts = {
  1: 30,
  2: 38,
  3: 50,
  4: 61,
  5: 73,
  6: 84,
  7: 96,
  8: 99,
  9: 107,
  10: 115,
  11: 122,
  12: 128,
  13: 136,
  14: 143,
  15: 149,
  16: 155,
  17: 163,
  18: 168,
  19: 176,
  20: 182,
  21: 189,
  22: 195,
  23: 203,
  24: 209,
  25: 216,
  26: 222,
  27: 230,
  28: 235,
  29: 243,
  30: 251,
  31: 256,
  32: 264,
  33: 270,
  34: 277,
  35: 283,
  36: 291,
  37: 297,
  38: 304,
  39: 310,
  40: 318,
  41: 323,
  42: 331,
  43: 337,
  44: 344,
  45: 350,
  46: 358,
  47: 364,
  48: 371,
  49: 377,
  50: 385,
  51: 390,
  52: 398,
  53: 404,
  54: 411,
  55: 419,
  56: 425,
  57: 432,
  58: 438,
  59: 446,
  60: 452,
  61: 457,
  62: 463,
  63: 471,
  64: 476,
  65: 484,
  66: 490,
  67: 497,
  68: 503,
  69: 511,
  70: 517,
  71: 524,
  72: 530,
  73: 538,
  74: 543,
  75: 549,
  76: 557,
  77: 562,
  78: 570,
  79: 576,
  80: 584,
  81: 589,
  82: 597,
  83: 603,
  84: 610,
  85: 616,
  86: 624,
  87: 629,
  88: 637,
  89: 643,
  90: 650,
  91: 656,
  92: 664,
  93: 670,
  94: 677,
  95: 683,
  96: 691,
  97: 696,
  98: 702,
  99: 710,
  100: 716,
  101: 723,
  102: 729,
  103: 737,
  104: 742,
  105: 750,
  106: 756,
  107: 763,
  108: 769,
  109: 777,
  110: 783,
  111: 791,
  112: 796,
  113: 802,
  114: 810,
  115: 816,
  116: 823,
  117: 829,
  118: 837,
  119: 842,
  120: 850,
  121: 856,
  122: 863,
  123: 869,
  124: 877,
  125: 883,
  126: 891,
  127: 896,
  128: 902,
  129: 910,
  130: 916,
  131: 923,
  132: 929,
  133: 937,
  134: 942,
  135: 950,
  136: 956,
  137: 963,
  138: 969,
  139: 977,
  140: 983,
  141: 991,
  142: 996,
  143: 1002,
  144: 1010,
  145: 1016,
  146: 1023,
  147: 1029,
  148: 1037,
  149: 1042,
  150: 1050,
  151: 1056,
  152: 1063,
  153: 1069,
  154: 1077,
  155: 1083,
  156: 1091,
  157: 1096,
  158: 1102,
  159: 1110,
  160: 1116,
  161: 1123,
  162: 1129,
  163: 1137,
  164: 1142,
  165: 1150,
  166: 1156,
  167: 1163,
  168: 1169,
  169: 1177,
  170: 1183,
  171: 1191,
  172: 1196,
  173: 1202,
  174: 1210,
  175: 1216,
  176: 1223,
  177: 1229,
  178: 1237,
  179: 1243,
  180: 1251,
  181: 1256,
  182: 1264,
  183: 1270,
  184: 1277,
  185: 1283,
  186: 1291,
  187: 1296,
  188: 1302,
  189: 1310,
  190: 1316,
  191: 1323,
  192: 1329,
  193: 1337,
  194: 1343,
  195: 1350,
  196: 1356,
  197: 1364,
  198: 1370,
  199: 1377,
  200: 1383,
  201: 1391,
  202: 1396,
  203: 1402,
  204: 1410,
  205: 1416,
  206: 1423,
  207: 1429,
  208: 1437,
  209: 1443,
  210: 1451,
  211: 1456,
  212: 1462,
  213: 1470,
  214: 1476,
  215: 1483,
  216: 1489,
  217: 1497,
  218: 1503,
  219: 1510,
  220: 1516,
  221: 1524,
  222: 1530,
  223: 1537,
  224: 1543,
  225: 1551,
  226: 1556,
  227: 1564,
  228: 1570,
  229: 1577,
  230: 1583,
  231: 1591,
  232: 1597,
  233: 1604,
  234: 1610,
  235: 1618,
  236: 1623,
  237: 1631,
  238: 1637,
  239: 1644,
  240: 1650,
  241: 1658,
  242: 1663,
  243: 1671,
  244: 1677,
  245: 1685,
  246: 1691,
  247: 1698,
  248: 1704,
  249: 1712,
  250: 1718,
  251: 1726,
  252: 1731,
  253: 1737,
  254: 1745,
  255: 1751,
  256: 1758,
  257: 1764,
  258: 1772,
  259: 1777,
  260: 1785,
  261: 1791,
  262: 1798,
  263: 1804,
  264: 1812,
  265: 1818,
  266: 1826,
  267: 1831,
  268: 1837,
  269: 1845,
  270: 1851,
  271: 1858,
  272: 1864,
  273: 1872,
  274: 1877,
  275: 1885,
  276: 1891,
  277: 1898,
  278: 1904,
  279: 1912,
  280: 1918,
  281: 1926,
  282: 1931,
  283: 1937,
  284: 1945,
  285: 1950,
  286: 1958,
  287: 1964,
  288: 1971,
  289: 1977,
  290: 1985,
  291: 1991,
  292: 1998,
  293: 2004,
  294: 2012,
  295: 2018,
  296: 2025,
  297: 2031,
  298: 2039,
  299: 2044,
  300: 2052,
  301: 2058,
  302: 2065,
  303: 2071,
  304: 2079,
  305: 2084,
  306: 2092,
  307: 2098,
  308: 2105,
  309: 2111,
  310: 2119,
  311: 2125,
  312: 2132,
  313: 2138,
  314: 2146,
  315: 2152,
  316: 2159,
  317: 2165,
  318: 2173,
  319: 2178,
  320: 2186,
  321: 2192,
  322: 2199,
  323: 2205,
  324: 2213,
  325: 2219,
  326: 2226,
  327: 2232,
  328: 2240,
  329: 2245,
  330: 2253,
  331: 2259,
  332: 2266,
  333: 2272,
  334: 2280,
  335: 2285,
  336: 2293,
  337: 2299,
  338: 2306,
  339: 2312,
  340: 2320,
  341: 2326,
  342: 2333,
  343: 2339,
  344: 2347,
  345: 2353,
  346: 2360,
  347: 2366,
  348: 2374,
  349: 2380,
  350: 2388,
};

export default priceByNoOfHalts;