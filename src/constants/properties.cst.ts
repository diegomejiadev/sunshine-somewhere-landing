export interface IProperty {
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  mainImage: string;
  blueprintImage?: string;
  imageGallery: string[];
  location: string;

  hasPool: boolean;
  guestsNumber: number;
  bedroomsNumber: number;
  bathroomsNumber: number;
  area: number; // in sqft

  isCloseToBeach: boolean;
  isPetFriendly: boolean;
  hasSpa: boolean;
}

enum LocationEnum {
  NAPLES = "Naples, FL",
  CAPE_CORAL = "Cape Coral, FL",
}

const VillaSwissProperty: IProperty = {
  name: "Villa Swiss-Modern and Luxury Pool/Spa Home",
  slug: "villa-swiss-modern-luxury-pool-spa-home",
  subtitle: "Professionally decorated gem in Vanderbilt Beach/Naples Park",
  description:
    "This modern and luxury pool and spa home has everything you need to spend an unforettable vacation. The location can't be better. Just minutes away to gorgeous Naples beaches, restaurants, shopping, and much more. Naples Park neighborhood is one of the most desirable areas to live in. It's biking distance to Vanderbilt Beach, Mercato and Waterside Shops.Have fun and enjoy the pool and spa with the whole family at this stylish place.",
  mainImage:
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293764/Sunshine%20Somewhere/properties/villa-swiss/1_dphgej.jpg",
  imageGallery: [
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293764/Sunshine%20Somewhere/properties/villa-swiss/1_dphgej.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293751/Sunshine%20Somewhere/properties/villa-swiss/2_tujltm.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293755/Sunshine%20Somewhere/properties/villa-swiss/3_m1sqgp.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293757/Sunshine%20Somewhere/properties/villa-swiss/4_ltstfy.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293769/Sunshine%20Somewhere/properties/villa-swiss/5_sayimj.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293760/Sunshine%20Somewhere/properties/villa-swiss/6_hodcfw.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293762/Sunshine%20Somewhere/properties/villa-swiss/7_yic0wx.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293761/Sunshine%20Somewhere/properties/villa-swiss/8_kt8cco.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293762/Sunshine%20Somewhere/properties/villa-swiss/9_kiddyw.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293750/Sunshine%20Somewhere/properties/villa-swiss/10_jzarl3.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293756/Sunshine%20Somewhere/properties/villa-swiss/11_ndit8d.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293753/Sunshine%20Somewhere/properties/villa-swiss/12_sztumd.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293756/Sunshine%20Somewhere/properties/villa-swiss/13_vvxqu2.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293772/Sunshine%20Somewhere/properties/villa-swiss/14_t5hnld.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293752/Sunshine%20Somewhere/properties/villa-swiss/15_mkax3g.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293751/Sunshine%20Somewhere/properties/villa-swiss/16_qrqd0r.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293759/Sunshine%20Somewhere/properties/villa-swiss/17_cnqh0h.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293754/Sunshine%20Somewhere/properties/villa-swiss/18_oolvn5.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293757/Sunshine%20Somewhere/properties/villa-swiss/19_saulo5.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293753/Sunshine%20Somewhere/properties/villa-swiss/20_qp6sez.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293766/Sunshine%20Somewhere/properties/villa-swiss/21_royq07.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293769/Sunshine%20Somewhere/properties/villa-swiss/22_ec88yu.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293765/Sunshine%20Somewhere/properties/villa-swiss/23_n3hhyb.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293770/Sunshine%20Somewhere/properties/villa-swiss/24_iv1fyy.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293767/Sunshine%20Somewhere/properties/villa-swiss/25_iuykxe.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293764/Sunshine%20Somewhere/properties/villa-swiss/26_uqgfqv.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293758/Sunshine%20Somewhere/properties/villa-swiss/27_ixa07z.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293763/Sunshine%20Somewhere/properties/villa-swiss/28_ccxe6z.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293768/Sunshine%20Somewhere/properties/villa-swiss/29_eetewx.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293771/Sunshine%20Somewhere/properties/villa-swiss/30_jdopoi.jpg",
  ],
  location: LocationEnum.NAPLES,

  guestsNumber: 6,
  bedroomsNumber: 3,
  bathroomsNumber: 3,
  area: 2115,

  hasPool: true,
  hasSpa: true,
  isCloseToBeach: true,
  isPetFriendly: true,
};

const PeacefulRelaxingHeatedPoolProperty: IProperty = {
  name: "Peaceful and Relaxing heated Pool Home Fully fenced in Beautiful Cape Coral",
  slug: "peaceful-relaxing-heated-pool-home-fully-fenced-in-beautiful-cape-coral",
  subtitle:
    "Great location, just minutes away from Sun Splash Waterpark, beaches, restaurants, shopping, and more!",
  description:
    "Nicely updated home located on a quiet street directly across from waterfront homes. This 3BR/2BA split floor plan home boasts over1,900 sqft of living space. Stainless steel appliances and granite countertops round out the kitchen.Sliding glass doors in master bedroom give direct access to pool area. There are TVs in each bedroom, living room and pool area.",
  mainImage:
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293730/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/1_j8ipoh.jpg",
  blueprintImage:
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293730/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/2_ruu02l.jpg",
  imageGallery: [
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293730/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/1_j8ipoh.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293731/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/3_yvgdom.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293732/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/4_rqrmqe.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293732/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/5_u4iv4m.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293733/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/6_itukqb.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293734/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/7_rywm9h.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293735/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/8_uwkpb1.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293735/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/9_tc0fhz.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293739/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/10_zk3eft.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293736/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/11_xqlbgl.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293736/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/12_yumec9.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293738/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/13_he9o1b.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293737/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/14_oi06gg.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293737/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/15_eunxpv.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293739/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/16_awtacl.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293741/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/17_iob8hp.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293740/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/18_mtspz3.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293741/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/19_anbkmd.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293742/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/20_icvofg.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293743/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/21_tqtrcv.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293743/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/22_wazsuc.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293744/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/23_otxp9g.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293744/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/24_wjp1sd.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293745/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/25_jxsc5w.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293746/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/26_fgupnk.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293746/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/27_ni1cg7.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293747/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/28_zmfibk.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293748/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/29_qr4ftu.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293748/Sunshine%20Somewhere/properties/peaceful-relaxing-heated-pool/30_bh1uvz.jpg",
  ],
  location: LocationEnum.CAPE_CORAL,

  guestsNumber: 8,
  bedroomsNumber: 3,
  bathroomsNumber: 2,
  area: 1982,
  hasPool: true,
  hasSpa: false,
  isCloseToBeach: false,
  isPetFriendly: true,
};

const SparklingLargePoolHomeProperty: IProperty = {
  name: "Sparkling Large Pool Home with Lake View",
  subtitle: "Centrally located in private and well kept community",
  slug: "sparkling-large-pool-home-with-lake-view",
  description:
    "This property is located in The Crown Pointe Community which offers a community pool located at the Clubhouse next to the Lake. Lounge chairs, tables, umbrellas and outside shower are provided. The pool is heated, maintained seven days a week and open from dawn until dusk. Fully equipped state of art Fitness Center with sauna, men's and women's locker room both equipped with showers.Three lighted Tennis Courts.",
  mainImage:
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293695/Sunshine%20Somewhere/properties/sparkling-large-pool-home/1_h4veqd.jpg",
  blueprintImage:
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293685/Sunshine%20Somewhere/properties/sparkling-large-pool-home/2_lur0f3.jpg",
  imageGallery: [
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293695/Sunshine%20Somewhere/properties/sparkling-large-pool-home/1_h4veqd.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293724/Sunshine%20Somewhere/properties/sparkling-large-pool-home/29_pwso7z.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293718/Sunshine%20Somewhere/properties/sparkling-large-pool-home/3_deb6wl.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293701/Sunshine%20Somewhere/properties/sparkling-large-pool-home/4_atfkr5.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293720/Sunshine%20Somewhere/properties/sparkling-large-pool-home/5_lvt1ok.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293686/Sunshine%20Somewhere/properties/sparkling-large-pool-home/6_ew4oeq.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293686/Sunshine%20Somewhere/properties/sparkling-large-pool-home/7_kzpjzg.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293687/Sunshine%20Somewhere/properties/sparkling-large-pool-home/8_abs02u.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293688/Sunshine%20Somewhere/properties/sparkling-large-pool-home/9_i0vwld.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293692/Sunshine%20Somewhere/properties/sparkling-large-pool-home/10_x9ia81.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293726/Sunshine%20Somewhere/properties/sparkling-large-pool-home/11_avuvly.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293725/Sunshine%20Somewhere/properties/sparkling-large-pool-home/12_oeopyp.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293723/Sunshine%20Somewhere/properties/sparkling-large-pool-home/13_lirbx6.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293720/Sunshine%20Somewhere/properties/sparkling-large-pool-home/14_gtrkh8.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293710/Sunshine%20Somewhere/properties/sparkling-large-pool-home/15_iezsbc.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293690/Sunshine%20Somewhere/properties/sparkling-large-pool-home/16_lansbk.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293693/Sunshine%20Somewhere/properties/sparkling-large-pool-home/17_yboeiv.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293702/Sunshine%20Somewhere/properties/sparkling-large-pool-home/18_z6fluq.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293695/Sunshine%20Somewhere/properties/sparkling-large-pool-home/19_rsmqts.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293694/Sunshine%20Somewhere/properties/sparkling-large-pool-home/20_vz2kpb.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293699/Sunshine%20Somewhere/properties/sparkling-large-pool-home/21_r8ucmv.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293688/Sunshine%20Somewhere/properties/sparkling-large-pool-home/22_dud6y8.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293689/Sunshine%20Somewhere/properties/sparkling-large-pool-home/23_vavrex.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293689/Sunshine%20Somewhere/properties/sparkling-large-pool-home/24_qsuj6i.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293697/Sunshine%20Somewhere/properties/sparkling-large-pool-home/25_nuklnk.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293698/Sunshine%20Somewhere/properties/sparkling-large-pool-home/26_jcueyu.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293700/Sunshine%20Somewhere/properties/sparkling-large-pool-home/27_uhnjvs.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293700/Sunshine%20Somewhere/properties/sparkling-large-pool-home/28_txcje2.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293710/Sunshine%20Somewhere/properties/sparkling-large-pool-home/30_rdmpcm.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293723/Sunshine%20Somewhere/properties/sparkling-large-pool-home/31_xh1zyt.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293712/Sunshine%20Somewhere/properties/sparkling-large-pool-home/32_lnpjsk.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293701/Sunshine%20Somewhere/properties/sparkling-large-pool-home/33_v7jwll.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293703/Sunshine%20Somewhere/properties/sparkling-large-pool-home/34_g9tdla.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293702/Sunshine%20Somewhere/properties/sparkling-large-pool-home/35_qnfv5r.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293705/Sunshine%20Somewhere/properties/sparkling-large-pool-home/36_qebghq.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293704/Sunshine%20Somewhere/properties/sparkling-large-pool-home/37_wzc6d5.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293715/Sunshine%20Somewhere/properties/sparkling-large-pool-home/38_frxo3h.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293706/Sunshine%20Somewhere/properties/sparkling-large-pool-home/39_lw3dfc.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293705/Sunshine%20Somewhere/properties/sparkling-large-pool-home/40_llcwqk.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293708/Sunshine%20Somewhere/properties/sparkling-large-pool-home/41_mvldkg.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293706/Sunshine%20Somewhere/properties/sparkling-large-pool-home/42_mawrfc.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293716/Sunshine%20Somewhere/properties/sparkling-large-pool-home/43_u6hsi6.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293717/Sunshine%20Somewhere/properties/sparkling-large-pool-home/44_vj59rq.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293717/Sunshine%20Somewhere/properties/sparkling-large-pool-home/45_t1kem3.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293708/Sunshine%20Somewhere/properties/sparkling-large-pool-home/46_a03erc.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293697/Sunshine%20Somewhere/properties/sparkling-large-pool-home/47_qujifm.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293707/Sunshine%20Somewhere/properties/sparkling-large-pool-home/48_zymhbe.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293709/Sunshine%20Somewhere/properties/sparkling-large-pool-home/49_dntged.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293696/Sunshine%20Somewhere/properties/sparkling-large-pool-home/50_dc0m73.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293727/Sunshine%20Somewhere/properties/sparkling-large-pool-home/51_kxamdx.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293726/Sunshine%20Somewhere/properties/sparkling-large-pool-home/52_layopu.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293722/Sunshine%20Somewhere/properties/sparkling-large-pool-home/53_qrpodd.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293727/Sunshine%20Somewhere/properties/sparkling-large-pool-home/54_hobcwa.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293728/Sunshine%20Somewhere/properties/sparkling-large-pool-home/55_vccvge.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293728/Sunshine%20Somewhere/properties/sparkling-large-pool-home/56_gx0b2w.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293721/Sunshine%20Somewhere/properties/sparkling-large-pool-home/57_lgdpdq.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293713/Sunshine%20Somewhere/properties/sparkling-large-pool-home/58_kwxff2.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293721/Sunshine%20Somewhere/properties/sparkling-large-pool-home/59_nmzuzf.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293712/Sunshine%20Somewhere/properties/sparkling-large-pool-home/60_h3luim.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293720/Sunshine%20Somewhere/properties/sparkling-large-pool-home/61_b3uvj5.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293715/Sunshine%20Somewhere/properties/sparkling-large-pool-home/62_kyhqut.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293711/Sunshine%20Somewhere/properties/sparkling-large-pool-home/63_au5djy.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293714/Sunshine%20Somewhere/properties/sparkling-large-pool-home/64_nthpav.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293714/Sunshine%20Somewhere/properties/sparkling-large-pool-home/65_n6rno3.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293692/Sunshine%20Somewhere/properties/sparkling-large-pool-home/66_e2hcwe.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293691/Sunshine%20Somewhere/properties/sparkling-large-pool-home/67_rjecl6.jpg",
  ],
  location: LocationEnum.NAPLES,

  guestsNumber: 6,
  bedroomsNumber: 3,
  bathroomsNumber: 2,
  area: 1731,

  hasPool: true,
  hasSpa: false,
  isCloseToBeach: false,
  isPetFriendly: true,
};

const GorgeousLelyProperty: IProperty = {
  name: "Gorgeous Lely Resort Pool Home",
  slug: "gorgeous-lely-resort-pool-home",
  subtitle:
    "Great location, just minutes away from Downtown Naples, beaches, restaurants, shopping, and more!",
  mainImage:
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293652/Sunshine%20Somewhere/properties/gorgeous-lely/1_aucubu.jpg",
  blueprintImage:
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293648/Sunshine%20Somewhere/properties/gorgeous-lely/3_amint1.jpg",
  description:
    "This gorgeous spacious pool home has easy access to everything. It is located in Lely Resort just minutes away from Downtown Naples, beaches, restaurants, shopping, and more. The players club membership may be available to our guests for an additional fee. It offers a resort style waterfall pool, restaurants, a pool side tiki bar, lap pool, fitness center with saunas and steam rooms, full service spa and tennis courts. Lely Resort has 2 public pay-as-you-go courses.",
  imageGallery: [
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293652/Sunshine%20Somewhere/properties/gorgeous-lely/1_aucubu.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293649/Sunshine%20Somewhere/properties/gorgeous-lely/2_mxkjge.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293650/Sunshine%20Somewhere/properties/gorgeous-lely/4_je5icf.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293650/Sunshine%20Somewhere/properties/gorgeous-lely/5_eazuzo.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293651/Sunshine%20Somewhere/properties/gorgeous-lely/6_qogflq.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293649/Sunshine%20Somewhere/properties/gorgeous-lely/7_et6v5h.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293649/Sunshine%20Somewhere/properties/gorgeous-lely/8_bxirms.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293657/Sunshine%20Somewhere/properties/gorgeous-lely/9_e1w6nu.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293651/Sunshine%20Somewhere/properties/gorgeous-lely/10_lsajeq.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293652/Sunshine%20Somewhere/properties/gorgeous-lely/11_sw15xw.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293658/Sunshine%20Somewhere/properties/gorgeous-lely/12_swhwru.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293654/Sunshine%20Somewhere/properties/gorgeous-lely/13_zwwvsp.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293656/Sunshine%20Somewhere/properties/gorgeous-lely/14_eklndc.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293653/Sunshine%20Somewhere/properties/gorgeous-lely/15_qkeaws.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293656/Sunshine%20Somewhere/properties/gorgeous-lely/16_ft0p3e.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293658/Sunshine%20Somewhere/properties/gorgeous-lely/17_yhbdtb.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293656/Sunshine%20Somewhere/properties/gorgeous-lely/18_nlsp05.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293652/Sunshine%20Somewhere/properties/gorgeous-lely/19_vj88tk.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293659/Sunshine%20Somewhere/properties/gorgeous-lely/20_iovlzi.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293659/Sunshine%20Somewhere/properties/gorgeous-lely/21_jod8fs.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293660/Sunshine%20Somewhere/properties/gorgeous-lely/22_dxyafu.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293655/Sunshine%20Somewhere/properties/gorgeous-lely/23_oncf9c.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293653/Sunshine%20Somewhere/properties/gorgeous-lely/24_tdp1il.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293654/Sunshine%20Somewhere/properties/gorgeous-lely/25_bhvdyr.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293657/Sunshine%20Somewhere/properties/gorgeous-lely/26_vknon2.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293661/Sunshine%20Somewhere/properties/gorgeous-lely/27_nd8eaz.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293659/Sunshine%20Somewhere/properties/gorgeous-lely/28_agyspz.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293661/Sunshine%20Somewhere/properties/gorgeous-lely/29_ik24l8.jpg",
  ],
  location: LocationEnum.NAPLES,

  guestsNumber: 6,
  bedroomsNumber: 3,
  bathroomsNumber: 2,
  area: 1987,

  hasPool: true,
  hasSpa: false,
  isCloseToBeach: false,
  isPetFriendly: true,
};

const NewlyRenovatedProperty: IProperty = {
  name: "Newly Renovated Pool Home in The Heart of Naples",
  subtitle: "Pet Friendly Pool Home with big backyard fully fenced",
  slug: "newly-renovated-pool-home-in-the-heart-of-naples",
  description:
    "Make some memories at this unique famiy and pet friendly place. This beautiful and cozy newly renovated house has everything you need to spend a fantastic vacation in the sun. Located in the heart of Naples, just minutes away from Naples best beaches, dining and shopping.",
  mainImage:
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293630/Sunshine%20Somewhere/properties/newly-renovated-pool/1_krr3vj.jpg",
  blueprintImage:
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293630/Sunshine%20Somewhere/properties/newly-renovated-pool/3_maob2w.jpg",
  imageGallery: [
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293630/Sunshine%20Somewhere/properties/newly-renovated-pool/1_krr3vj.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293637/Sunshine%20Somewhere/properties/newly-renovated-pool/2_g4sg9y.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293630/Sunshine%20Somewhere/properties/newly-renovated-pool/4_aphccw.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293631/Sunshine%20Somewhere/properties/newly-renovated-pool/5_a17yh6.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293632/Sunshine%20Somewhere/properties/newly-renovated-pool/6_rki5mg.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293631/Sunshine%20Somewhere/properties/newly-renovated-pool/7_hsonnk.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293630/Sunshine%20Somewhere/properties/newly-renovated-pool/8_hhgu9h.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293631/Sunshine%20Somewhere/properties/newly-renovated-pool/9_n8yxbp.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293634/Sunshine%20Somewhere/properties/newly-renovated-pool/10_c247h9.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293634/Sunshine%20Somewhere/properties/newly-renovated-pool/11_ahmsoy.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293635/Sunshine%20Somewhere/properties/newly-renovated-pool/12_bmcalx.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293636/Sunshine%20Somewhere/properties/newly-renovated-pool/13_yqp3mo.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293636/Sunshine%20Somewhere/properties/newly-renovated-pool/14_whkbb4.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293632/Sunshine%20Somewhere/properties/newly-renovated-pool/15_nitwid.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293637/Sunshine%20Somewhere/properties/newly-renovated-pool/16_rvu6vu.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293638/Sunshine%20Somewhere/properties/newly-renovated-pool/17_me2j6v.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293637/Sunshine%20Somewhere/properties/newly-renovated-pool/18_ilqfdy.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293640/Sunshine%20Somewhere/properties/newly-renovated-pool/19_xxyb5y.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293640/Sunshine%20Somewhere/properties/newly-renovated-pool/20_e0w7od.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293633/Sunshine%20Somewhere/properties/newly-renovated-pool/21_op6els.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293635/Sunshine%20Somewhere/properties/newly-renovated-pool/22_ycm0bm.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293640/Sunshine%20Somewhere/properties/newly-renovated-pool/23_jfatbw.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293640/Sunshine%20Somewhere/properties/newly-renovated-pool/24_kgkirp.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293641/Sunshine%20Somewhere/properties/newly-renovated-pool/25_fapuyy.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293643/Sunshine%20Somewhere/properties/newly-renovated-pool/26_ysu5lt.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293642/Sunshine%20Somewhere/properties/newly-renovated-pool/27_dqkgkf.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293643/Sunshine%20Somewhere/properties/newly-renovated-pool/28_wgd2vb.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293641/Sunshine%20Somewhere/properties/newly-renovated-pool/29_hkn8no.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293644/Sunshine%20Somewhere/properties/newly-renovated-pool/30_u7tjyp.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293644/Sunshine%20Somewhere/properties/newly-renovated-pool/31_oo8b9c.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293644/Sunshine%20Somewhere/properties/newly-renovated-pool/32_r4pblo.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293645/Sunshine%20Somewhere/properties/newly-renovated-pool/33_xjuef9.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293638/Sunshine%20Somewhere/properties/newly-renovated-pool/34_eyn9gd.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293641/Sunshine%20Somewhere/properties/newly-renovated-pool/35_iiebwg.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293642/Sunshine%20Somewhere/properties/newly-renovated-pool/36_qcngtk.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293639/Sunshine%20Somewhere/properties/newly-renovated-pool/37_nzlyeo.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293639/Sunshine%20Somewhere/properties/newly-renovated-pool/38_v9twfq.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293633/Sunshine%20Somewhere/properties/newly-renovated-pool/39_vfhlxu.jpg",
    "https://res.cloudinary.com/purplesoda/image/upload/v1750293634/Sunshine%20Somewhere/properties/newly-renovated-pool/40_ipwchd.jpg",
  ],
  location: LocationEnum.NAPLES,

  guestsNumber: 8,
  bedroomsNumber: 3,
  bathroomsNumber: 2,
  area: 1412,

  hasPool: true,
  hasSpa: false,
  isCloseToBeach: false,
  isPetFriendly: true,
};

export const PROPERTIES_LIST: IProperty[] = [
  NewlyRenovatedProperty,
  PeacefulRelaxingHeatedPoolProperty,
  GorgeousLelyProperty,
  SparklingLargePoolHomeProperty,
  VillaSwissProperty,
];
