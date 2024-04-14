import React, { Component } from 'react'

export default class History extends Component {
  constructor(){
    super();
    // console.log("ham first");
    this.yestHisDate = () => {
        let today = new Date();
        let yesterday = new Date(today);
        yesterday.setDate(today.getDate()-1);
        let yestDate = yesterday.toISOString().split('T')[0];
        return yestDate;
    }
    this.state = {
        histrdat: {"location":{
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
                            "code": "clear 2",
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
                            "code": "clear 3",
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
                            "code": "clear 4",
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
                            "code": "clear 5",
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
                            "code": "clear 6",
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
                            "code": "clear 7",
                            "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
                            "text": "Partly"
                        }
                    }
                }
            ]
        }}
          ,
          loading : false,
          date: this.yestHisDate(),
          warn: "lOl"
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
    this.props.setProgress(30);
    let place = this.props.place;
    // console.log("place ye hai:"+place)
    let ondate
    let today = new Date();
    let yesterday = new Date(today);
    yesterday.setDate(today.getDate()-1);
    let formatDate = today.toISOString().split('T')[0];
    let yestDate = yesterday.toISOString().split('T')[0];
    // console.log(yestDate);
    // console.log(yesterday);
    // console.log(formatDate);

    let beforeEightDays = new Date(today);
    beforeEightDays.setDate(today.getDate()-8);
    let formatBefore = beforeEightDays.toISOString().split('T')[0];
    // console.log(formatBefore)
    
    if(formatBefore <= this.state.date && formatDate > this.state.date){
        ondate = this.state.date;
        this.setState({warn:"weather information as on "+ondate})
        this.props.setProgress(70);
        // console.log(formatDate)
        // console.log(yestDate)
    }
    else if(yestDate<this.state.date){
        ondate = yestDate;
        this.props.setProgress(70);
        this.setState({warn: `What do you think that you can see the historic data for a date that hasn't come yet 😑. Therefore I provided data based on ${yestDate} . Yes I have a obsession with this date 🙂`});
    }
    else{
        this.setState({warn:`You have to choose the date after ${formatBefore}.  Therefore data you see is based on Date ${formatBefore}`})
        ondate=formatBefore;
        this.props.setProgress(70);
    }

    // console.log(ondate);
    let hist = "https://api.weatherapi.com/v1/history.json?key=11c20f2803f04f099ac160306242101&q="+place+"&dt="+ondate;
    let histr = await fetch(hist);
    let historicData = await histr.json();
    // console.log(historicData);
    this.setState({histrdat: historicData});
    this.props.setProgress(80);
    // console.log('chla hi nhi');
  }
  render() {
    const  handleOnchange=(event) => {
    
      this.setState({date: event.target.value});
      
    }
    const handleOnclick=()=>{
      // let day= this.state.date;
      // console.log("date:"+day);
      this.customInitialization();
    }
    return (
      <>
      {/* 2023-02-1 */}
        <div className='bg-white h-fit md:h-fit md:grid md:grid-cols-2 md:gap-4 py-10 bg-opacity-15 backdrop-blur-xl mt-14 mx-7 rounded-[20px] shadow-yellow-500 shadow-2xl'>
            <div>
                <div className='flex-col text-2xl md:text-5xl text-yellow-600 cursor-pointer hover:text-white transition-colors duration-500 p-5 my-2'>
                    <div className='flex m-2'>Historic data : <p className='text-white mx-5'>{this.state.histrdat.location.name}</p></div>
                    <div className="text-sm text-white"> plase select Date on or between the 8 days before of today's date in yyyy-MM-dd format</div>
                </div>
                <div className='flex ml-5 items-center justify-between w-[300px] h-[100px]'>
                <div className='w-fit p-5 h-fit bg-black bg-opacity-15 backdrop-blur-xl rounded-[20px] shadow-2xl'>
                    <input type="date" value={this.state.date} onChange={handleOnchange} name="dateinp"  width="100px" id="dateBox" />
                </div>
                <div className='w-fit h-fit shadow-2xl shadow-yellow-500'>
                    <button className='my-auto shadow-2xl bg-cyan-400 hover:bg-white py-2 px-3 font-bold hover:text-cyan-400 text-white rounded-md transition-colors duration-300' onClick={handleOnclick}>Get Info</button>
                    </div>
                </div>
                <div className='ml-5 mt-3 text-white'>
                {this.state.warn}
                </div>
            </div>
            <div className='flex justify-center items-center'>
                {this.state.histrdat.forecast.forecastday.map((mol,ctr)=>{
                    return <div key={ctr} className='m-5 flex flex-wrap justify-center'>
                        <div className='m-2 text-white w-fit p-8 h-fit bg-black bg-opacity-15 backdrop-blur-xl rounded-[20px] shadow-2xl'>sunrise: {mol.astro.sunrise}</div>
                        <div className='m-2 text-black hover:text-white transition-colors duration-500 w-fit p-8 h-fit bg-black bg-opacity-15 backdrop-blur-xl rounded-[20px] shadow-2xl'>{mol.day.avgtemp_c}<sup>◦</sup>c</div>
                        <div className='m-2 text-white w-fit p-8 h-fit bg-black bg-opacity-15 backdrop-blur-xl rounded-[20px] shadow-2xl'>sunset: {mol.astro.sunset}</div>
                        <div className='m-2 text-white w-fit p-5 h-fit bg-black bg-opacity-15 backdrop-blur-xl rounded-[20px] shadow-2xl'><img src={mol.day.condition.icon} alt="icon" /></div>
                        <div className='m-2 text-yellow-400 w-fit p-8 h-fit bg-black bg-opacity-15 backdrop-blur-xl rounded-[20px] shadow-2xl'>{mol.day.condition.text}</div>
                    </div>
                })}
            </div>
        </div>

      </>
    )
  }
}
