// Office staff name and image url
const staffDetails = [
  {name:"Asoka Babu Morla",
  designation: "Principal Architect"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531511/AA%20Office%20Staff%20Photos%20Final/_01-ASOKA_BABU_MORLA_PRINCIPAL_ARCHITECT_tcv66t.jpg"
},
  {name:"Nagaraju Kasani",
  designation: "Principal Architect"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531511/AA%20Office%20Staff%20Photos%20Final/_02-NAGARAJU_KASANI_PRINCIPAL_ARCHITECT_by9kpv.jpg"
},
  {name:"Raja Srinivas Kandregula",
  designation: "Principal Architect"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531512/AA%20Office%20Staff%20Photos%20Final/_03-RAJA_SRINIVAS_KANDREGULA_PRINCIPAL_ARCHITECT_nafk6f.jpg"
},
  {name:"Rajendra Prasad Malineni",
  designation: "Principal Architect"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531511/AA%20Office%20Staff%20Photos%20Final/_04-RAJENDRA_PRASAD_MALINENI_PRINCIPAL_ARCHITECT_u36lqv.jpg"
},
  {name:"George Z",
  designation: "Intern"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531511/AA%20Office%20Staff%20Photos%20Final/_01-ASOKA_BABU_MORLA_PRINCIPAL_ARCHITECT_tcv66t.jpg"
},
  {name:"Ravi T",
  designation: "Intern"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531511/AA%20Office%20Staff%20Photos%20Final/_01-ASOKA_BABU_MORLA_PRINCIPAL_ARCHITECT_tcv66t.jpg"
},
  {name:"Shivani",
  designation: "Intern"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531511/AA%20Office%20Staff%20Photos%20Final/_01-ASOKA_BABU_MORLA_PRINCIPAL_ARCHITECT_tcv66t.jpg"
},
  {name:"Ujjwal K S",
  designation: "Intern"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531511/AA%20Office%20Staff%20Photos%20Final/_01-ASOKA_BABU_MORLA_PRINCIPAL_ARCHITECT_tcv66t.jpg"
},
  {name:"Vaishnavi K",
  designation: "Intern"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531511/AA%20Office%20Staff%20Photos%20Final/_01-ASOKA_BABU_MORLA_PRINCIPAL_ARCHITECT_tcv66t.jpg"
},
  {name:"Vardhini D",
  designation: "Intern"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531511/AA%20Office%20Staff%20Photos%20Final/_01-ASOKA_BABU_MORLA_PRINCIPAL_ARCHITECT_tcv66t.jpg"
},
  {name:"Dhanasree K",
  designation: "Senior Architect"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531511/AA%20Office%20Staff%20Photos%20Final/_01-ASOKA_BABU_MORLA_PRINCIPAL_ARCHITECT_tcv66t.jpg"
},
  {name:"Dhinakaran R",
  designation: "Senior Architect"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531511/AA%20Office%20Staff%20Photos%20Final/_01-ASOKA_BABU_MORLA_PRINCIPAL_ARCHITECT_tcv66t.jpg"
},
  {name:"Harish S",
  designation: "Project Architect"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531511/AA%20Office%20Staff%20Photos%20Final/_01-ASOKA_BABU_MORLA_PRINCIPAL_ARCHITECT_tcv66t.jpg"
},
  {name:"Kusuma L",
  designation: "Principal Architect"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531511/AA%20Office%20Staff%20Photos%20Final/_01-ASOKA_BABU_MORLA_PRINCIPAL_ARCHITECT_tcv66t.jpg"
},
  {name:"Magesh R",
  designation: "Senior BIM Manager"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531511/AA%20Office%20Staff%20Photos%20Final/_01-ASOKA_BABU_MORLA_PRINCIPAL_ARCHITECT_tcv66t.jpg"
},
  {name:"Nagarjun M",
  designation: "Project Architect"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531511/AA%20Office%20Staff%20Photos%20Final/_01-ASOKA_BABU_MORLA_PRINCIPAL_ARCHITECT_tcv66t.jpg"
},
  {name:"Prameela K",
  designation: "Human Resourse Manager"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531511/AA%20Office%20Staff%20Photos%20Final/_01-ASOKA_BABU_MORLA_PRINCIPAL_ARCHITECT_tcv66t.jpg"
},
  {name:"Prasad J",
  designation: "Technical Designer"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531511/AA%20Office%20Staff%20Photos%20Final/_01-ASOKA_BABU_MORLA_PRINCIPAL_ARCHITECT_tcv66t.jpg"
},
  {name:"Suraj A",
  designation: "Technical Designer"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531511/AA%20Office%20Staff%20Photos%20Final/_01-ASOKA_BABU_MORLA_PRINCIPAL_ARCHITECT_tcv66t.jpg"
},
  {name:"Tulasi R",
  designation: "Technical Designer"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531511/AA%20Office%20Staff%20Photos%20Final/_01-ASOKA_BABU_MORLA_PRINCIPAL_ARCHITECT_tcv66t.jpg"
},
  {name:"Vagdevi N",
  designation: "Technical Designer"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531511/AA%20Office%20Staff%20Photos%20Final/_01-ASOKA_BABU_MORLA_PRINCIPAL_ARCHITECT_tcv66t.jpg"
},
  {name:"Vaishnavi S",
  designation: "Project Architect"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531511/AA%20Office%20Staff%20Photos%20Final/_01-ASOKA_BABU_MORLA_PRINCIPAL_ARCHITECT_tcv66t.jpg"
},
  {name:"Vinay V",
  designation: "Project Architect"
  url:"https://res.cloudinary.com/ajithvault/image/upload/v1575531511/AA%20Office%20Staff%20Photos%20Final/_01-ASOKA_BABU_MORLA_PRINCIPAL_ARCHITECT_tcv66t.jpg"
}
]
