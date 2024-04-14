import React, { Component } from 'react';

export class Wteather extends Component {
    
      constructor(){
        super();
        // console.log("ham first");
        this.state = {
            
                "location": {
                  "name": "London",
                  "region": "City of London, Greater London",
                  "country": "United Kingdom",
                  "lat": 51.52,
                  "lon": -0.11,
                  "tz_id": "Europe/London",
                  "localtime_epoch": 1613896955,
                  "localtime": "2021-02-21 8:42"
                },
                "current": {
                  "last_updated_epoch": 1613896210,
                  "last_updated": "2021-02-21 08:30",
                  "temp_c": 11,
                  "temp_f": 51.8,
                  "is_day": 1,
                  "condition": {
                    "text": "Partly cloudy",
                    "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                    "code": 1003
                  },
                  "wind_mph": 3.8,
                  "wind_kph": 6.1,
                  "wind_degree": 220,
                  "wind_dir": "SW",
                  "pressure_mb": 1009,
                  "pressure_in": 30.3,
                  "precip_mm": 0.1,
                  "precip_in": 0,
                  "humidity": 82,
                  "cloud": 75,
                  "feelslike_c": 9.5,
                  "feelslike_f": 49.2,
                  "vis_km": 10,
                  "vis_miles": 6,
                  "uv": 1,
                  "gust_mph": 10.5,
                  "gust_kph": 16.9,
                  "air_quality": {
                    "co": 230.3,
                    "no2": 13.5,
                    "o3": 54.3,
                    "so2": 7.9,
                    "pm2_5": 8.6,
                    "pm10": 11.3,
                    "us-epa-index": 1,
                    "gb-defra-index": 1
                  }
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
        let place = this.props.place;
        // console.log("place ye hai:"+place)
        let url = "https://api.weatherapi.com/v1/current.json?key=11c20f2803f04f099ac160306242101&q="+place+"&aqi=yes";
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState(parsedData);
        // console.log('chla hi nhi');
      }




      // componentDidMount();
  render() {
    let day="Night";
    if(this.state.current.is_day){
        day='Day';
      }else{
        day='Night';
      }
    // if(this.props.srch){
        
    //     console.log('phir se mount hua')
    // }
    return (
        <>
            <div className='bg-white h-fit py-12 bg-opacity-15 backdrop-blur-xl mt-14 mx-7 rounded-[20px] shadow-[#009e9a] shadow-2xl'>
                <div className='flex justify-between items-center'>
                    <div className='text-white text-xl md:text-5xl p-5'>
                        {this.state.location.name}  <p className='text-cyan-500'>{this.state.location.country}</p>  
                    </div>
                    <div className="text-white p-5  md:text-2xl">{this.state.current.last_updated}</div>
                </div>
                <div className='grid grid-cols-2 gap-x-4 md:mt-[20px]'>
                    <div className=' my-2 mx-5 md:mx-5 md:h-[330px] h-[240px] md:grid md:grid-cols-2'>
                      <div className='flex justify-center items-center'>
                      <div className='bg-black bg-opacity-15 md:my-5 md:mx-2 md:p-5 cursor-pointer backdrop-blur-3xl rounded-[20px] shadow-2xl h-fit w-fit'>
                            <img src={this.state.current.condition.icon} className='w-[90px]' alt="lol"/>
                        </div>
                      </div>
                      <div className='flex justify-center items-center md:hidden'>
                          <div className='md:hidden bg-black bg-opacity-15 p-2 m-2 cursor-pointer backdrop-blur-3xl rounded-[20px] shadow-2xl  h-[30%] w-[70%] sm:h-[80px] flex justify-center items-center text-center text-white text-sm'>
                            <p>PM 2.5 : {this.state.current.air_quality.pm2_5}</p>
                          </div>
                        </div>
                        <div className='flex justify-center items-center md:hidden'>
                          <div className='md:hidden bg-black bg-opacity-15 p-2 m-2 cursor-pointer backdrop-blur-3xl rounded-[20px] shadow-2xl h-[30%] w-[70%] sm:h-[80px] flex justify-center items-center text-center  text-white text-sm'>
                            <p>Wind-Kmp : {this.state.current.wind_kph}</p>
                          </div>
                        </div>
                        <div className='hidden md:grid md:text-white md:bg-black md:bg-opacity-15 md:p-5 md:my-5 md:cursor-pointer md:backdrop-blur-3xl  md:mx-auto md:rounded-[20px] md:shadow-2xl md:h-fit md:w-[12rem] w-fit'><p className='font-extrabold text-[#009e9a] hover:text-white transition-colors duration-500'>Air Quality </p>
                                
                                o3 : {this.state.current.air_quality.o3} <br />
                                so2 : {this.state.current.air_quality.so2} <br />
                                pm2.5 : {this.state.current.air_quality.pm2_5} <br />
                                pm10 : {this.state.current.air_quality.pm10} <br />
                        </div>
                        <div className='hidden md:grid text-[rebeccapurple] transition-colors duration-500 hover:text-white bg-black bg-opacity-15 p-5 my-1 cursor-pointer backdrop-blur-3xl  mx-auto rounded-[20px] shadow-2xl h-fit md:w-[12rem] w-fit'><p className='text-white font-extrabold'>Wind</p>
                              Wind mph : {this.state.current.wind_mph} <br />
                              Wind kph : {this.state.current.wind_kph} <br />
                              Wind degree : {this.state.current.wind_degree} <br />
                              Wind dir : {this.state.current.wind_dir} <br />
                        </div>
                        <div className='hidden md:grid text-white bg-black bg-opacity-15 p-5 my-1 cursor-pointer backdrop-blur-3xl  mx-auto rounded-[20px] shadow-2xl h-fit md:w-[12rem] w-fit'>
                              Humidity : {this.state.current.humidity} <br />
                              Cloud : {this.state.current.cloud} <br />
                              Feelslike c : {this.state.current.feelslike_c} <br />
                        </div>
                    </div>
                    <div className=' my-2 mx-5 md:mx-5 md:h-[330px] h-[240px] md:grid md:grid-cols-2'>
                        <div className='md:hidden text-3xl transition-colors duration-500 hover:text-white bg-black bg-opacity-15 p-5 cursor-pointer backdrop-blur-3xl  mx-auto rounded-[20px] shadow-2xl h-fit w-fit'>
                          {this.state.current.temp_c}<sup>◦</sup>c
                        </div>
                        <div className='flex-col justify-center items-center md:hidden'>
                        <div className='text-white hover:text-blue-400 transition-colors duration-500 md:hidden bg-black bg-opacity-15 p-2 m-2 cursor-pointer backdrop-blur-3xl mx-auto my-5 rounded-[20px] shadow-2xl  h-[30%] w-[70%] sm:h-[80px] flex justify-center items-center text-center font-bold'>
                            {this.state.current.condition.text}
                        </div>
                        <div className='md:hidden bg-black bg-opacity-15 p-2 m-2 cursor-pointer backdrop-blur-3xl mx-auto rounded-[20px] shadow-2xl  h-[30%] w-[70%] sm:h-[80px] flex justify-center items-center text-center text-white text-sm'>
                          Feelslike c : {this.state.current.feelslike_c} <br />
                        </div>
                      </div>
                      <div className='hidden md:flex md:flex-col'>
                          <div className='text-[90px] transition-colors duration-500 hover:text-white bg-black bg-opacity-15 p-5 cursor-pointer backdrop-blur-3xl  mx-auto rounded-[20px] shadow-2xl h-fit w-fit'>
                          {this.state.current.temp_c}<sup>◦</sup>c
                          </div>
                          <div className='text-blue-500 hover:text-yellow-100 transition-colors duration-500 text-2xl bg-black bg-opacity-15 cursor-pointer backdrop-blur-3xl font-bold p-[48px] my-5 mx-auto rounded-[20px] shadow-2xl h-fit w-fit'>
                          {this.state.current.condition.text}
                          </div>
                        </div>
                      <div>
                        <div className='hidden md:flex md:flex-col text-white bg-black bg-opacity-15 p-5 cursor-pointer backdrop-blur-3xl font-bold  mx-auto rounded-[20px] shadow-2xl h-fit w-fit'>
                          Press. mb:{this.state.current.pressure_mb} <br />
                          Pressure in: {this.state.current.precip_in} <br />
                          Precip mm : {this.state.current.precip_mm} <br />
                          Precip in : {this.state.current.pressure_in} <br />
                          Feelslike f : {this.state.current.feelslike_f} <br />
                          UV : {this.state.current.uv} <br />
                          Gust mph : {this.state.current.gust_mph} <br />
                          Gust kph : {this.state.current.gust_kph} <br />
                        </div>
                        <div className='hidden md:flex text-[#edcc37] text-2xl hover:text-white transition-colors duration-500 bg-black bg-opacity-15 cursor-pointer backdrop-blur-3xl font-bold p-[40px] my-3 mx-auto rounded-[20px] shadow-2xl h-fit w-fit'>
                          {day}
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </>
      )
  }
}

export default Wteather
