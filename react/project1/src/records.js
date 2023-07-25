function Records(){

    let employees=[
    {"name":"Shafeeq",
    "dept":"IT",
     "salary":2000},

    {"name":"Shafeeq",
    "dept":"IT",
    "salary":2000},

                                    {

                                                    "name":"Shafeeq",

                                                                "dept":"IT",

                                                                            "salary":2000

                                    },

                                            {

                                                            "name":"james",

                                                                        "dept":"HR",

                                                                                    "salary":4000

                                            },

                                                    {

                                                                    "name":"peter",

                                                                                "dept":"Sales",

                                                                                            "salary":3000

                                                    }

                                                ]

                                                    function doSomething(rec){

                                                                return rec.name

                                                    }

                                                        function check(rec){

                                                                    if(rec.dept=="IT"){

                                                                                    return true

                                                                    }else{

                                                                                    return false

                                                                    }

                                                                }




                                                                    let names1=employees.map(doSomething)

                                                                        let names2=employees.filter(check)

                                                                           

                                                                            return(




                                                                                        <>
                                                                                        
                                                                                                {names1}
                                                                                                
                                                                                                        <br/>
                                                                                                        
                                                                                                                {names2.length}
                                                                                                                
                                                                                                                        </>
                                                                                                                        
                                                                            )
                                                                            
}




expor</>
                                                                            )
                                                                    }
                                                                    }
                                                        }
                                                    }
                                                    }
                                            }
                                    }
                            }
                    }
        ]
}