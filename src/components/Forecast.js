import React, { Component } from 'react'

export default class Forecast extends Component {
    constructor(){
        super();
        // console.log("ham first");
        this.state = {
            "location":{
                "country" : "united kingdom",
                "name" : "london",
            },"current":{
                "condition":{
                    "code": "clear",
                    "icon": "",
                    "text": "Partly"
                }
            },"forecast":{
                "forecastday":[
                    {
                        "astro":{
                            "sunrise":"07:48 AM",
                            "sunset":"04:38 PM"
                        },
                        "date":"2024-01-26",
                        "day":{
                            "avgtemp_c":"8.4",
                            "condition":{
                                "code": "clear",
                                "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
                                "text": "Partly"
                            }
                        }
                    },{
                        "astro":{
                            "sunrise":"07:48 AM",
                            "sunset":"04:38 PM"
                        },
                        "date":"2024-01-26",
                        "day":{
                            "avgtemp_c":"8.4",
                            "condition":{
                                "code": "clear",
                                "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
                                "text": "Partly"
                            }
                        }
                    },{
                        "astro":{
                            "sunrise":"07:48 AM",
                            "sunset":"04:38 PM"
                        },
                        "date":"2024-01-26",
                        "day":{
                            "avgtemp_c":"8.4",
                            "condition":{
                                "code": "clear",
                                "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
                                "text": "Partly"
                            }
                        }
                    },{
                        "astro":{
                            "sunrise":"07:48 AM",
                            "sunset":"04:38 PM"
                        },
                        "date":"2024-01-26",
                        "day":{
                            "avgtemp_c":"8.4",
                            "condition":{
                                "code": "clear",
                                "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
                                "text": "Partly"
                            }
                        }
                    },{
                        "astro":{
                            "sunrise":"07:48 AM",
                            "sunset":"04:38 PM"
                        },
                        "date":"2024-01-26",
                        "day":{
                            "avgtemp_c":"8.4",
                            "condition":{
                                "code": "clear",
                                "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
                                "text": "Partly"
                            }
                        }
                    },{
                        "astro":{
                            "sunrise":"07:48 AM",
                            "sunset":"04:38 PM"
                        },
                        "date":"2024-01-26",
                        "day":{
                            "avgtemp_c":"8.4",
                            "condition":{
                                "code": "clear",
                                "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
                                "text": "Partly"
                            }
                        }
                    },{
                        "astro":{
                            "sunrise":"07:48 AM",
                            "sunset":"04:38 PM"
                        },
                        "date":"2024-01-26",
                        "day":{
                            "avgtemp_c":"8.4",
                            "condition":{
                                "code": "clear",
                                "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
                                "text": "Partly"
                            }
                        }
                    }
                ]
            }
              ,
              loading : false
        }
      }
      
      async componentDidMount(){
        // console.log("second")
        this.customInitialization();
        
      }
      componentDidUpdate(prevProps){
        if (prevProps.shouldUpdate !==  this.props.shouldUpdate) {
          this.customInitialization();
        }
      }
      async customInitialization(){
        this.props.setProgress(0);
        let place = this.props.place;
        // console.log("place ye hai:"+place)
        let forc = "https://api.weatherapi.com/v1/forecast.json?key=11c20f2803f04f099ac160306242101&q="+place+"&days=7&aqi=no&alerts=no";
        let forec = await fetch(forc);
        this.props.setProgress(30);
        let forecastData = await forec.json();
        console.log(forecastData);
        this.setState(forecastData);
        // console.log('chla hi nhi');
        this.props.setProgress(100);
      }
  render() {
    return (
      <>
        <div className='hidden lg:grid bg-white h-fit py-10 bg-opacity-15 backdrop-blur-xl mt-14 mx-7 rounded-[20px] shadow-[#009e9a] shadow-2xl'>
              <div className='flex text-5xl text-cyan-700 cursor-pointer hover:text-white transition-colors duration-500 p-5 my-2'>
                Next 3 Days in <p className='ml-5 text-white'>{this.state.location.name}</p>
              </div>
              <div className='flex justify-between text-white mx-10'>
                {this.state.forecast.forecastday.map((element,str)=>{
                    return <div key={str} className='bg-black bg-opacity-15 backdrop-blur-3xl rounded-[16px] shadow-2xl h-[25rem]'>
                    <div className='justify-center flex mt-2 text-xl'>
                      {element.date}
                    </div>
                    <div className='flex justify-center bg-black bg-opacity-15 backdrop-blur-3xl rounded-[16px]  shadow-2xl w-fit mx-auto my-5 p-3'>
                      <img src={element.day.condition.icon} width='80px' alt="logo" />
                    </div>
                    <div className='text-center text-sm ml-5 mt-5'>
                        Sunrise : {element.astro.sunrise} <br />
                        Sunset : {element.astro.sunset}
                    </div>
                    <div className='flex justify-center text-center text-4xl my-3'>
                        <p> {element.day.avgtemp_c}<sup>◦</sup> c </p>
                    </div>
                    <div className='px-5 flex justify-center text-2xl font-bold text-[#edcc37] hover:text-white transition-colors duration-500 text-center'>
                        {element.day.condition.text}
                    </div>
                  </div>
                })}
                
              </div>
            </div>
            <div className='lg:hidden bg-white h-fit py-10 bg-opacity-15 backdrop-blur-xl mt-14 mx-7 rounded-[20px] shadow-2xl pt-5 space-y-8'>
                <div className=' text-cyan-700 cursor-pointer hover:text-white transition-colors duration-500 mx-5 text-2xl'>Next 7 days</div>
                {this.state.forecast.forecastday.map((atom,ptr)=>{
                    return <div key={ptr}> <div className='text-cyan-700 flex justify-center'>{atom.date}</div>
                    <div className='bg-black bg-opacity-15 backdrop-blur-3xl rounded-[16px]  shadow-2xl w-[90%] mx-auto h-[130px] text-white p-3 flex items-center justify-between '>
                    <div className='bg-black bg-opacity-15 backdrop-blur-3xl rounded-[16px] shadow-[#009e9a] shadow-2xl h-fit w-fit p-1 md:m-5'>
                        <img src={atom.day.condition.icon} className='md:w-[90px]' alt="logo" />
                    </div>
                    <div className='text-white text-2xl md:text-5xl '>
                        <p> {atom.day.avgtemp_c}<sup>◦</sup>c</p>
                    </div>
                    <div className=' text-2xl md:text-4xl font-bold text-[#edcc37] hover:text-white transition-colors duration-500 text-center'>
                        {atom.day.condition.text}
                    </div>
                </div>
                </div>
                })}    
            </div>
      </>
    )
  }
}
