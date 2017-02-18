'use strict';

/*
 Coding of some characters in the Unicode Latin Extended-A (01xx)
 and Latin Exteded Addition (1exx) pages.
 The encoding idea is due to Thomas Malten,
 who uses this, or some variation of this,
 to represent characters shown in texts as Latin letters with additional
 markings (e.g., line/dot above/below).
 In the encoding, Latin letters are followed by 1 (or occasionally, more
 than 1) digit.

 The digits have the following meaning in this version:
 1 = line above (macron)
 2 = dot below
 3 = dot above
 4 = acute accent above
 5 = tilde above
 6 = line below
 7 = 'hat' above
 Note: also, the extra cases S13 ans s13 are coded
 to show as 's' with inverted hat above; this used in Tamil Lexicon
 */

const AsEncoding = {
    as: {
        vowels: 'a1 a10 a11 a3 a13 a14 a18 a2 a4 a5 a6 a7 b1 b3 b2 b4 b5 b6 b7 c1 c3 c2 c4 c5 c6 c7 d1 d3 d2 d4 d5 d6 d7 e1 e3 e2 e4 e5 e6 e7 e10 e11 f1 f3 f2 f4 f5 f6 f7 g1 g3 g2 g4 g5 g6 g7 h1 h3 h2 h4 h5 h6 h7 i1 i10 i3 i4 i13 i14 i2 i5 i6 i7 j1 j3 j2 j4 j5 j6 j7 k1 k3 k2 k4 k5 k6 k7 l1 l3 l2 l12 l4 l5 l6 l7 m1 m3 m2 m4 m5 m6 m7 n1 n3 n2 n4 n5 n6 n7 o1 o3 o2 o4 o5 o6 o7 o7 o10 o11 p1 p3 p2 p4 p5 p6 p7 q1 q3 q2 q4 q5 q6 q7 r1 r3 r21 r12 r2 r24 r5 r6 r7 s1 s3 s2 s4 s5 s6 s7 t1 t3 t2 t4 t5 t6 t7 u1 u10 u3 u4 u13 u14 u2 u5 u6 u7 u10 u11 v1 v3 v2 v4 v5 v6 v7 w1 w3 w2 w4 w5 w6 w7 x1 x3 x2 x4 x5 x6 x7 y1 y3 y2 y4 y5 y6 y7 z1 z3 z2 z4 z5 z6 z7 A1 A14 A10 A3 A2 A4 A5 A6 A7 B1 B3 B2 B4 B5 B6 B7 C1 C3 C2 C4 C5 C6 C7 D1 D3 D2 D4 D5 D6 D7 E1 E3 E2 E4 E5 E6 E7 F1 F3 F2 F4 F5 F6 F7 G1 G3 G2 G4 G5 G6 G7 H1 H3 H2 H4 H5 H6 H7 I1 I10 I3 I2 I4 I5 I6 I7 J1 J3 J2 J4 J5 J6 J7 K1 K3 K2 K4 K5 K6 K7 L1 L3 L2 L21 L4 L5 L6 L7 M1 M3 M2 M4 M5 M6 M7 N1 N3 N2 N4 N5 N6 N7 O1 O3 O2 O4 O5 O6 O7 P1 P3 P2 P4 P5 P6 P7 Q1 Q3 Q2 Q4 Q5 Q6 Q7 R1 R3 R21 R2 R4 R5 R6 R7 S1 S3 S2 S4 S5 S6 S7 T1 T3 T2 T4 T5 T6 T7 U1 U10 U3 U2 U4 U5 U6 U7 V1 V3 V2 V4 V5 V6 V7 W1 W3 W2 W4 W5 W6 W7 X1 X3 X2 X4 X5 X6 X7 Y1 Y3 Y2 Y4 Y5 Y6 Y7 Z1 Z3 Z2 Z4 Z5 Z6 Z7 s13 S13 E409 E467 t10'.split(' '),
    },
    as_roman: {
        vowels: '\u0101 \u00e2 \u00e0 \u00e0 \u0101\u0300 \u0101\u0301 \u0101 \u1ea1 \u00e1 a5 a6 \u00e2 b1 \u1e03 \u1e05 b4 b5 \u1e07 b7 c1 \u010b \u00e7 \u0107 c5 c6 \u0109 d1 \u1e0b \u1e0d d4 d5 \u1e0f d7 \u0113 \u0117 \u1eb9 \u00e9 \u1ebd e6 \u00ea \u00ea \u00e8 f1 f3 f2 f4 f5 f6 f7 \u1e21 \u0121 g2 \u01f5 g5 g6 \u011d h1 \u1e23 \u1e25 h4 h5 \u1e96 \u0125 \u012b \u00ee \u00ec \u00ed \u012b\u0300 \u012b\u0301 i2 \u0129 i6 \u00ee j1 j3 j2 j4 j5 j6 \u0135 k1 k3 \u1e33 \u1e31 k5 \u1e35 k7 l1 l3 \u1e37 \u1e39 \u013a l5 \u1e3b l7 m1 \u1e41 \u1e43 m4 m5 m6 m7 n1 \u1e45 \u1e47 \u0144 \u00f1 \u1e49 n7 \u014d \u00f2 \u1ecd \u00f3 o5 o6 \u00f4 \u00f6 \u00f4 \u00f2 p1 \u1e57 p2 \u1e55 p5 p6 p7 q1 q3 q2 q4 q5 q6 q7 r1 \u1e59 \u1e5d \u1e5d \u1e5b \u1e5b\u0301 r5 \u1e5f r7 s1 \u1e61 \u1e63 \u015b s5 s6 \u015d t1 \u1e6b \u1e6d t4 t5 \u1e6f t7 \u016b \u016b \u00f9 \u00fa \u016b\u0300 \u016b\u0301 \u1ee5 \u0169 u6 \u00fb \u00fb \u00f9 v1 v3 v2 v4 v5 v6 v7 w1 \u1e87 \u1e89 \u1e83 w5 w6 \u0175 x1 \u1e8b x2 x4 x5 x6 x7 y1 \u1e8f \u1ef5 y4 \u1ef9 y6 \u0177 z1 \u017c \u1e93 \u017a z5 \u1e95 \u1e91 \u0100 \u0100\u0301 \u0100 \u0041\u0300 \u1ea0 A4 A5 A6 A7 B1 \u1e02 \u1e04 B4 B5 \u1e06 B7 C1 \u010a \u00c7 \u0106 C5 C6 \u0108 D1 \u1e0a \u1e0c D4 D5 \u1e0e D7 \u0112 \u0116 \u1eb8 \u00c9 \u1ebc E6 E7 F1 F3 F2 F4 F5 F6 F7 \u1e20 \u0120 G2 \u01f4 G5 G6 \u011c H1 \u1e22 \u1e24 H4 H5 H6 \u0124 \u012a I10 \u0049\u0300 \u1eca \u0049\u0301 \u0128 I6 \u00ce J1 J3 J2 J4 J5 J6 \u0134 K1 K3 \u1e32 \u1e30 K5 \u1e34 K7 L1 L3 \u1e36 \u1e38 \u0139 L5 \u1e3a L7 M1 \u1e40 \u1e42 M4 M5 M6 M7 N1 \u1e44 \u1e46 \u0143 \u00d1 \u1e48 N7 \u014c O3 \u1ecc O4 O5 O6 O7 P1 \u1e56 P2 \u1e54 P5 P6 P7 Q1 Q3 Q2 Q4 Q5 Q6 Q7 R1 \u1e58 \u1e5c \u1e5a \u0154 R5 \u1e5e R7 S1 \u1e60 \u1e62 \u015a S5 S6 \u015c T1 \u1e6a \u1e6c T4 T5 \u1e6e T7 \u016a \u016a \u00d9 \u1ee4 \u00da \u0168 U6 U7 V1 V3 V2 V4 V5 V6 V7 W1 \u1e86 \u1e88 \u1e82 W5 W6 \u0174 X1 \u1e8a X2 X4 X5 X6 X7 Y1 \u1e8e \u1ef4 Y4 \u1ef8 Y6 \u0176 Z1 \u017b \u1e92 \u0179 Z5 \u1e94 \u1e90 \u0161 \u0160 E409 E467 \u1e6d'.split(' '),
    }
};

export default AsEncoding;
