let setImage = 1;
const projectDetails = [
  {
    projectName: "Mr & Mrs C.M Reddy Home",
    client: "Mr C.M Reddy",
    location: "Bangalore",
    builtArea: 6000,
    year: 2019,
    images: [
      "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575547114/BLR_CM%20Reddy/_BLR_CM_Reddy_Res_Int_01_Home_zctiow.jpg",
      "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575547105/BLR_CM%20Reddy/BLR_CM_Reddy_Res_Int_00_oat8tg.jpg",
      "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575547105/BLR_CM%20Reddy/BLR_CM_Reddy_Res_Int_01_ncz15v.jpg",
      "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575547114/BLR_CM%20Reddy/BLR_CM_Reddy_Res_Int_16_soivsn.jpg"
    ]
  },
  {
    projectName: "Flat Interiors",
    client: "Confidential",
    location: "Bangalore",
    builtArea: 1500,
    year: 2017,
    images: [
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575569987/BLR_Flat%20Interiors/_BLR_Flat_Int_01_Thumb-min_ibcs02.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566684/BLR_Flat%20Interiors/BLR_Flat_Int_02_y3igju.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566683/BLR_Flat%20Interiors/BLR_Flat_Int_01_g3tkwk.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566683/BLR_Flat%20Interiors/BLR_Flat_Int_03_imhqgp.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566681/BLR_Flat%20Interiors/BLR_Flat_Int_00_g5xhta.jpg"
    ]
  },
  {
    projectName: "GONAHALLI",
    client: "Mr C.M Reddy",
    location: "Bangalore",
    builtArea: 6000,
    year: 2019,
    images: [
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575570381/BLR_Gollahalli%20Residence%20at%20Blr/_BLR_Gollahalli_Res_Int_01_Thumb_txi4ab.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566682/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_03_mttjxi.png",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566682/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_01_xxgmpk.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566678/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_15_o1zwj3.png",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566678/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_14_sv6fix.png",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566675/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_13_kk31q4.png",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566674/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Ext_02_kqkqex.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566673/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_12_ol38mx.png",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566673/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_11_upnank.png",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566672/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_02_ykwzhu.png",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566670/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_10_incex1.png",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566669/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_09_wehqa4.png",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566665/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_05_nhk8fc.png",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566664/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_00_j6vucg.png",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566662/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_04_b6agbd.png",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566658/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Ext_01_a3bdl9.jpg"
    ]
  },
  {
    projectName: "Divine Mercy - Indoor Stadium",
    client: "Kickstart",
    location: "Bangalore",
    builtArea: 8500,
    year: 2020,
    images: [
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566678/BLR_Indoor%20Stadium%20and%20courts%20for%20Kickstart/_BLR_ISACFK_Ext_01_Thumb_pqhsuy.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566679/BLR_Indoor%20Stadium%20and%20courts%20for%20Kickstart/BLR_ISACFK_Ext_01_cx0dqn.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566676/BLR_Indoor%20Stadium%20and%20courts%20for%20Kickstart/BLR_ISACFK_Ext_00_fbwegr.jpg"
    ]
  },
  {
    projectName: "Nagarbhavi Residence",
    client: "Confidential",
    location: "Bangalore",
    builtArea: 6000,
    year: 2016,
    images: [
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566894/BLR_Nagarbhavi%20Residence/_BLR_NAG_Res_01_Thumb_qrt8zo.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566895/BLR_Nagarbhavi%20Residence/BLR_NAG_Res_Int_01_y1b265.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566894/BLR_Nagarbhavi%20Residence/BLR_NAG_Res_Ext_00_eiqqlf.jpg"
    ]
  },
  {
    projectName: "Mr & Mrs Satish Residence",
    client: "Mr Satish",
    location: "Bangalore",
    builtArea: 3000,
    year: 2019,
    images: [
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566886/BLR_Shanti%20Satish%20Residence%20at%20Blr/_BLR_SS_Ext_01_Home_-_Thumb_mxd3iu.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566894/BLR_Shanti%20Satish%20Residence%20at%20Blr/BLR_SS_Ext_00_tkxhiz.jpg"
    ]
  },
  {
    projectName: "TSI OFFICE",
    client: "Mr C.M Reddy",
    location: "Bangalore",
    builtArea: 7000,
    year: 2019,
    images: [
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566900/BLR_TSI%20Office/_BLR_TSI_Office_01_Thumb_aqwimy.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566903/BLR_TSI%20Office/BLR_TSI_Office__Ext_04_w63b1t.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566901/BLR_TSI%20Office/BLR_TSI_Office__Int_03_uhtp9x.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566900/BLR_TSI%20Office/BLR_TSI_Office__Int_04_bnnhv9.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566897/BLR_TSI%20Office/BLR_TSI_Office__Int_01_zq65xd.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566896/BLR_TSI%20Office/BLR_TSI_Office__Int_02_zxyjtn.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566895/BLR_TSI%20Office/BLR_TSI_Office__Ext_01_eaugxl.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566892/BLR_TSI%20Office/BLR_TSI_Office__Ext_03_z02gft.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566891/BLR_TSI%20Office/BLR_TSI_Office__Ext_02_oesaak.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566889/BLR_TSI%20Office/_BLR_TSI_Office_01_Home_l4eidk.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566888/BLR_TSI%20Office/BLR_TSI_Office__Int_06_zb41t9.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566887/BLR_TSI%20Office/BLR_TSI_Office__Int_05_zznapx.jpg"
    ]
  },
  {
    projectName: "TSI SCHOOL",
    client: "Mr C.M Reddy",
    location: "Bangalore",
    builtArea: 1800,
    year: 2019,
    images: [
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566893/BLR_TSI%20School/_BLR_TSI_School_Ext_01_Thumb_ish7w4.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566893/BLR_TSI%20School/BLR_TSI_School_Ext_01_v5vr33.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566888/BLR_TSI%20School/BLR_TSI_School_Ext_00_fcvwu0.jpg"
    ]
  },
  {
    projectName: "Kindergarten School",
    client: "Vidyaniketan",
    location: "Bangalore",
    builtArea: 40000,
    year: 2020,
    images: [
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567588/BLR_Vidyaniketan%20School/_BLR_VIDY_School_Ext_01_Thumb_hdmspf.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567590/BLR_Vidyaniketan%20School/BLR_VIDY_School_Ext_08_dyqyzf.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567584/BLR_Vidyaniketan%20School/BLR_VIDY_School_Ext_09_u8tcum.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567583/BLR_Vidyaniketan%20School/BLR_VIDY_School_Ext_10_ztywlb.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567580/BLR_Vidyaniketan%20School/_BLR_VIDY_School_Ext_01_Home_ova3hu.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567575/BLR_Vidyaniketan%20School/BLR_VIDY_School_Ext_07_cwc2xd.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567570/BLR_Vidyaniketan%20School/BLR_VIDY_School_Ext_00_bmlrj4.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567569/BLR_Vidyaniketan%20School/BLR_VIDY_School_Ext_06_m58gsa.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567568/BLR_Vidyaniketan%20School/BLR_VIDY_School_Ext_04_ng4zue.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567566/BLR_Vidyaniketan%20School/BLR_VIDY_School_Ext_05_mlqjv1.jpg"
    ]
  },
  {
    projectName: "Mr & Mrs. Vinod Residence",
    client: "Mr.Vinod",
    location: "ELURU",
    builtArea: 3090,
    year: 2020,
    images: [
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575572471/ELR_Vinod%20Residence/_ELR_Vinod_Res_Ext_01_Home-min_iodbts.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567586/ELR_Vinod%20Residence/ELR_Vinod_Res_Ext_03_w9r1w2.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567583/ELR_Vinod%20Residence/ELR_Vinod_Res_Ext_06_lygmey.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567581/ELR_Vinod%20Residence/ELR_Vinod_Res_Ext_01_lszd9v.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567581/ELR_Vinod%20Residence/ELR_Vinod_Res_Ext_07_wkzfw8.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567578/ELR_Vinod%20Residence/ELR_Vinod_Res_Ext_04_ayest1.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567575/ELR_Vinod%20Residence/ELR_Vinod_Res_Ext_02_zgywab.jpg"
    ]
  },
  {
    projectName: "FLAT INTERIORS",
    client: "Ramakrishna",
    location: "HYDERABAD",
    builtArea: 1800,
    year: 2019,
    images: [
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567565/HYD_Flat%20Interiors/_HYD_Flat_Int_01_Thumb_tsylra.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567569/HYD_Flat%20Interiors/HYD_Flat_Int_03_vn3q7d.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567567/HYD_Flat%20Interiors/HYD_Flat_Int_01_dmlr6v.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567564/HYD_Flat%20Interiors/_HYD_Flat_Int_01_Home_w2hde1.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567564/HYD_Flat%20Interiors/HYD_Flat_Int_02_tpdfea.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567564/HYD_Flat%20Interiors/HYD_Flat_Int_00_zz12yv.jpg"
    ]
  },
  {
    projectName: "Highrise Appartment",
    client: "Confidential",
    location: "Hyderabad",
    builtArea: 150000,
    year: -2019,
    images: [
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567570/HYD_Highrise%20Apts/_HYD_Highrise_Apts_Ext_01_Thumb_fxyyu0.jpg"
    ]
  },
  {
    projectName: "Ankura Club House",
    client: "My Home",
    location: "Hyderabad",
    builtArea: 60000,
    year: 2020,
    images: [
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567688/HYD_MH%20Ankura%20Club%20House/_HYD_MH_Ankura-Club-House_Int_01_Thumb_zrdhfd.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567691/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_46_pmxphc.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567684/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_38_sptj0f.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567684/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_45_n0bwn3.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567681/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_39_c3hoih.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567681/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_41_kxhtky.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567681/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_47_laf4l4.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567679/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_42_lgddjq.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567679/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_16_ik5rvx.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567679/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_40_trgnms.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567676/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_31_yvlfvf.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567679/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_16_ik5rvx.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567679/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_40_trgnms.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567676/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_31_yvlfvf.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567676/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_37_lqvol2.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567675/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_36_pvrk6w.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567675/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_35_ohfk5r.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567674/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_34_kcyehk.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567673/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_32_hhi408.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567672/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_33_ntlhmp.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567670/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_30_vrfgyk.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567668/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_28_uwn9jv.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567668/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_29_eo9oa6.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567668/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_29_eo9oa6.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567668/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_27_dfnfvz.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567666/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_19_saighp.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567663/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_23_djuw51.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567663/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_25_wtkiri.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567662/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_24_asflwi.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567662/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_22_kmu4oc.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567660/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_21_fyxni2.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567658/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_20_p0hgvc.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567658/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_00_fclzcw.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567658/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_18_u9livg.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567657/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_15_ep517o.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567656/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_17_n3akfn.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567656/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_10_v2uxvf.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567654/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_13_z21ulw.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567653/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_14_yipg5l.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567652/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_11_hoqni8.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567649/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_09_z5wywd.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567649/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_08_e3a9si.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567646/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_03_vglli5.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567646/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_05_i1uzwe.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567646/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_07_audkug.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567645/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_06_x2vmz5.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567641/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_02_zda0ry.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567641/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_04_knzzvv.jpg"
    ]
  },
  {
    projectName: "My Home Bhooja - interiors",
    client: "My Home",
    location: "Hyderabad",
    builtArea: 4370,
    year: 2019,
    images: [
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567696/HYD_MHB%20Interiors/_HYD_MHB_Int_01_Thumb_jw4hmo.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567701/HYD_MHB%20Interiors/HYD_MHB_Int_12_r9rl59.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567699/HYD_MHB%20Interiors/HYD_MHB_Int_06_fsh0tz.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567695/HYD_MHB%20Interiors/HYD_MHB_Int_10_uwrf9h.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567694/HYD_MHB%20Interiors/_HYD_MHB_Int_01_Home_imzrrz.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567694/HYD_MHB%20Interiors/HYD_MHB_Int_11_plln4n.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567693/HYD_MHB%20Interiors/HYD_MHB_Int_09_kbwygw.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567692/HYD_MHB%20Interiors/HYD_MHB_Int_07_ikvbgy.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567690/HYD_MHB%20Interiors/HYD_MHB_Int_05_aiwxrn.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567688/HYD_MHB%20Interiors/HYD_MHB_Int_04_dt9hwq.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567690/HYD_MHB%20Interiors/HYD_MHB_Int_05_aiwxrn.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567688/HYD_MHB%20Interiors/HYD_MHB_Int_04_dt9hwq.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567688/HYD_MHB%20Interiors/HYD_MHB_Int_04_dt9hwq.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567688/HYD_MHB%20Interiors/HYD_MHB_Int_00_fapjl3.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567688/HYD_MHB%20Interiors/HYD_MHB_Int_00_fapjl3.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567686/HYD_MHB%20Interiors/HYD_MHB_Int_03_pat8ab.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567686/HYD_MHB%20Interiors/HYD_MHB_Int_01_mdwxol.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567686/HYD_MHB%20Interiors/HYD_MHB_Int_02_zwptju.jpg"
    ]
  },
  {
    projectName: "Office Space",
    client: "My Home",
    location: "Mysore",
    builtArea: 35000,
    year: "",
    images: [
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567635/MSR_Office%20at%20Mysore/_MSR_Office__Ext_01_Thumb_mzveeg.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567636/MSR_Office%20at%20Mysore/MSR_Office_Ext_02_j8t9kr.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567634/MSR_Office%20at%20Mysore/MSR_Office_Ext_07_l7teml.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567634/MSR_Office%20at%20Mysore/MSR_Office_Ext_06_sivnhm.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567634/MSR_Office%20at%20Mysore/MSR_Office_Ext_03_qafxzi.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567634/MSR_Office%20at%20Mysore/MSR_Office_Ext_01_x26izl.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567634/MSR_Office%20at%20Mysore/MSR_Office_Ext_04_le5cbk.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567634/MSR_Office%20at%20Mysore/MSR_Office_Ext_05_akywef.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567633/MSR_Office%20at%20Mysore/MSR_Office_Ext_00_mvt8dv.jpg"
    ]
  },
  {
    projectName: "Hatcheries",
    client: "KBR",
    location: "Ongole",
    builtArea: 120000,
    year: "",
    images: [
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567638/ONG_Hatcheries/_ONG_Hatcheries_Ext_01_Thumb_c2ico0.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567650/ONG_Hatcheries/ONG_Hatcheries_Ext_02_dlnxnx.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567637/ONG_Hatcheries/ONG_Hatcheries_Ext_01_gy1uch.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567637/ONG_Hatcheries/_ONG_Hatcheries_Ext_01_Home_ixznft.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567636/ONG_Hatcheries/ONG_Hatcheries_Ext_03_bgsrtk.jpg"
    ]
  },
  {
    projectName: "AIS Bungalows",
    client: "APCRDA",
    location: "Amaravati",
    builtArea: 6000,
    year: 2019,
    images: [
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567816/VJY_AIS_Bungalows/_CRDA_AISH_Ext_01_PS__Thumb_sqica4.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567821/VJY_AIS_Bungalows/CRDA_AISH_Int_01_hgi7jv.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567815/VJY_AIS_Bungalows/CRDA_AISH_Int_05_x5uk2r.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567814/VJY_AIS_Bungalows/CRDA_AISH_Int_06_pezm19.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567813/VJY_AIS_Bungalows/CRDA_AISH_Int_04_ozmsyc.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567813/VJY_AIS_Bungalows/CRDA_AISH_Int_04_ozmsyc.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567812/VJY_AIS_Bungalows/CRDA_AISH_Int_03_vmhunt.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567812/VJY_AIS_Bungalows/CRDA_AISH_Ext_01_PS_vxrsez.jpg"
    ]
  },
  {
    projectName: "CMP Experience Center",
    client: "CM Properties",
    location: "Vijayawada",
    builtArea: 10000,
    year: 2019,
    images: [
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567801/VJY_CMP%20Experiance%20Center/_CMP_EXP_CENTER_01_THumb_lqyjn0.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567810/VJY_CMP%20Experiance%20Center/CMP_EXP_CENTER_04_fsdgxd.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567800/VJY_CMP%20Experiance%20Center/CMP_EXP_CENTER_02_o4s0ev.jpg"
    ]
  },
  {
    projectName: "FLAT INTERIORS AT VJY",
    client: "Mr C.M Reddy",
    location: "Bangalore",
    builtArea: 6000,
    year: 2019,
    images: [
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567803/VJY_Flat%20Interiors%20At%20VJY/_HJ_FLAT_Int_01_Thumb_lbx2iv.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567802/VJY_Flat%20Interiors%20At%20VJY/HJ_FLAT_Int_03_skyrva.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567800/VJY_Flat%20Interiors%20At%20VJY/HJ_FLAT_Int_01_fbtmqi.jpg"
    ]
  },
  {
    projectName: "HJ Function Hall",
    client: "KBR",
    location: "Vijayawada",
    builtArea: 12000,
    year: 2019,
    images: [
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567810/VJY_Function%20hall/_FUN_Hall_Int_01_Thumb_oe13zc.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567823/VJY_Function%20hall/FUN_Hall_Int_01_t6nqyh.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567807/VJY_Function%20hall/FUN_Hall_Int_03_sxbhkw.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567807/VJY_Function%20hall/_FUN_Hall_Int_01_Home_bneaxd.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567806/VJY_Function%20hall/FUN_Hall_Int_02_pgtnnv.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567805/VJY_Function%20hall/FUN_Hall_Int_05_jwtuhz.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567805/VJY_Function%20hall/FUN_Hall_Int_04_yixz4w.jpg",
      "http://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567803/VJY_Function%20hall/FUN_Hall_Int_00_ysvwdp.jpg"
    ]
  }
];

renderProjectTiles = () => {
  for (i = 0; i < projectDetails.length; i++) {
    if (i === 0 || i === 5 || i === 15 || i === 20) {
      $("#projectTilesContainer").append(
        `<div id="twoProjectRow${i}" class="twoProjectRow">
      <div class="card twoProjectTile">
      <img
        class="card-img-top twoProjectRowImage"
        src="${projectDetails[i].images[0]}"
        alt="project${i + 1}"
        onclick="openGallery(${i});"
      />
      <div class="twoProjectOverlay">
        <div class="twoProjectTitle">${projectDetails[i].projectName}</div>
      </div>
    </div>
    </div>`
      );
    } else if (i === 1 || i === 6 || i === 11 || i === 16) {
      $(`#twoProjectRow${i - 1}`).append(
        `
      <div class="card twoProjectTile">
      <img
        class="card-img-top twoProjectRowImage"
        src="${projectDetails[i].images[0]}"
        alt="project${i + 1}"
        onclick="openGallery(${i});"
      />
      <div class="twoProjectOverlay">
        <div class="twoProjectTitle">${projectDetails[i].projectName}</div>
      </div>
    </div>`
      );
    } else if (i === 2 || i === 7 || i === 12 || i === 17) {
      $("#projectTilesContainer").append(
        `<div id="threeProjectRow${i}" class="threeProjectRow">
      <div class="card threeProjectTile">
            <img
              class="card-img-top threeProjectRowImage"
              src="${projectDetails[i].images[0]}"
              alt="project${i + 1}"
              onclick="openGallery(${i});"
            />
            <div class="threeProjectOverlay">
              <div class="threeProjectTitle">${
                ProjectDetails[i].projectName
              }</div>
            </div>
          </div>
          </div>`
      );
    } else if (i === 3 || i === 8 || i === 13 || i === 18) {
      $(`#threeProjectRow${i - 1}`).append(`<div class="card threeProjectTile">
      <img
        class="card-img-top threeProjectRowImage"
        src="${projectDetails[i].images[0]}"
        alt="project${i + 1}"
        onclick="openGallery(${i});"
      />
      <div class="threeProjectOverlay">
        <div class="threeProjectTitle">${projectDetails[i].projectName}</div>
      </div>
    </div>}`);
    } else if (i === 4 || i === 9 || i === 14 || i === +19) {
      $(`#threeProjectRow${i - 2}`).append(`<div class="card threeProjectTile">
    <img
      class="card-img-top threeProjectRowImage"
      src="${projectDetails[i].images[0]}"
      alt="project${i + 1}"
      onclick="openGallery(${i});"
    />
    <div class="threeProjectOverlay">
      <div class="threeProjectTitle">${projectDetails[i].projectName}</div>
    </div>
  </div>}`);
    }
  }
};

renderProjectTiles();

openGallery = index => {
  let projectTiles = document.getElementById("projectTilesContainer");
  projectTiles.style.display = "none";
  let individualProject = document.getElementById("individualProject");
  individualProject.style.display = "flex";
  $(`#individualProject`).append(`
  <div id="gallery" class="gallery">
        <div class="card">
          <img
            id="main"
            class="card-img-top preview"
            src=""
            alt="preview"
          />
        </div>
        <div
          class="uk-position-relative uk-visible-toggle uk-light thumbnailDiv"
          tabindex="-1"
          uk-slider
        >
          <ul id="thumbnail"
            class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m "
          >
          </ul>
          <a
            class="uk-position-center-left uk-position-small thumbnailSliderArrow"
            href="#"
            uk-slidenav-previous
            uk-slider-item="previous"
          ></a>
          <a
            class="uk-position-center-right uk-position-small thumbnailSliderArrow"
            href="#"
            uk-slidenav-next
            uk-slider-item="next"
          ></a>
         </div>
  </div>
  <div class="card projectDescription">
        <div class="card-body">
          <h3>${projectDetails[index].projectName}</h3>
          <p><b>Client: </b> ${projectDetails[index].client}</p>
          <p><b>Location: </b>${projectDetails[index].location}</p>
          <p><b>Built Area: </b>${projectDetails[index].builtArea}</</p>
          <p><b>Year: </b>${projectDetails[index].year}</p>
        </div>
  `);
  for (i = 0; i < projectDetails[index].images.length; i++) {
    $("#thumbnail").append(`<li>
    <img
      id = ${i + 1}
      class="thumbnail"
      onclick="preview(this);"
      src=${projectDetails[index].images[i]}
      alt="preview"
      srcset="" 
    />
  </li>`);
  }
  sliderFunction();
};

function sliderFunction() {
  let main = document.getElementById("main");
  main.src = document.getElementById(setImage).src;
  document.getElementById(setImage).className = "thumbnail selected";
}

function preview(img) {
  document.getElementById(setImage).className = "thumbnail";
  img.className = "thumbnail selected";
  document.getElementById("main").src = img.src;
  setImage = img.id;
}
