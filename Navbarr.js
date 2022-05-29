//import React from 'react'
import AnimationIcon from '@mui/icons-material/Animation';
import './Navbarr.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
//import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import LoopIcon from '@mui/icons-material/Loop';
import InfoIcon from '@mui/icons-material/Info';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import NoiseAwareIcon from '@mui/icons-material/NoiseAware';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
//import { DatePicker } from '@mui/lab';
//import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
//import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
//import Line from '../AreaChart';
import {UserData} from './Data';
import React,{ useState } from "react";
import Icon from "react-crypto-icons";
import AreaChart from '../AreaChart';
import Chart from '../Chart';
import Avatar from 'react-avatar';
import SendIcon from '@mui/icons-material/Send';

function Navbarr() {
  const [userData,setUserData] =useState(
    { labels:  UserData.map((data)=>data.year),
     datasets:[{
       label:"",
       data:UserData.map((data)=>data.userGain),
       backgroundColor:["red"],
       border:"bold",
       borderColor:"blue",
       borderShadow:"red",
       width:"400px",
 
     }]}
 
   )
   
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <div className='container'> 
    <div className='nav'>
    <div className='image'>
    <AnimationIcon/><b className='title'> Trademask </b></div>
    
    <div className='profile'><AccountCircleIcon/><b className='pro'>Profile</b></div>
    <div className='dashboard'><DashboardIcon/><b className='pro'>Dashboard</b>  </div>
    <div className='trade'><MultipleStopIcon/> Trade</div>
    <div className='notification'><NotificationsIcon/> Notification</div>
    <div className='wallet'><AccountBalanceWalletIcon/>Wallet</div>
    <div className='wallet'><LoopIcon/>Exchange</div>

    <div className='bar'>
      <img className='img' src="https://th.bing.com/th/id/OIP.rd-igSyuGg8gT84WLVo3xAHaFj?pid=ImgDet&w=145&h=108.75&c=7&dpr=1.5" alt="" />
     <span className='explore'>Explore a new </span>
     <span className='explor'>strategy</span>
     <button>Try Now</button>
     
    </div>
    <div className='wallet'> <InfoIcon/> Information</div>
    <div className='wallet'><ManageAccountsIcon/> Account Settings</div>
    <div className='wallet'><LogoutIcon/> Logout</div>

    </div> 
    <div className='mid'>$46,541.04  
    <div className='up'>
   
    <div className='navi'>Summary</div>
    <div className='navi'>Chart</div>
    <div className='navi'>Conversation</div>
    <div className='navi'>Historical Data</div>
    <div className='time'>
      <div className='ti'>2022</div>
      <div className='ti'>2021</div>
      <div className='ti'>2020</div>
      <div className='ti'>2019</div>
      <div className='ti'>2018</div>
      <div className='ti'>2017</div>
      <div className='ti'>2016</div>
      <div className='ti'>2015</div>
      <div className='ti'>2014</div>
     
    </div>
   
    </div>
    <div 
     className='graph'><AreaChart chartData={userData}/></div>
   
    <div className='ca'>
   <div className='card'>
     <div className='cards'>
       <img className='i' src="https://image.shutterstock.com/image-vector/bitcoin-icon-sign-payment-symbol-600w-1938997753.jpg" alt="" /> <div className='b'>BTC-USD 
       <div className='sm'>Bitcoin-USD</div>
       <div className='gr'
  ><Chart chartData={userData}/></div></div> 
      </div>
     <div className='cardss'> <img className='i' src="https://www.bing.com/th?id=OIP.9j5m3LdwHKzr0Us9tz9KJQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" /> <div className='b'>SQL-USD 
     <div className='sm'>Solana USD</div>
     <div className='gr'
  ><Chart chartData={userData}/></div>
     </div>
     </div>
     
    
    
     
   </div>
   <div className='card'>
     <div className='cardss'
      > <img className='i'src="https://www.bing.com/th?id=OIP.tCZkzr8GbAhEnDotpKoalgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" /><div className='b'>BNB-USD
      <div className='sm'>BinanaceCoin USD</div>
      <div className='gr'
  ><Chart chartData={userData}/></div>
       </div>
     </div>
     <div className='cards'> <img className='i'src="https://www.bing.com/th?id=OIP.qOtUNQ6hNBFSNSX6HpXkKwHaHa&w=100&h=101&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" /><div className='b'>ETH-USD
     <div className='sm'>Ethereum USD</div>
     <div className='gr'
  ><Chart chartData={userData}/></div>
     </div></div>
    
    
     
   </div>
   <div className='maincard'>
     <div className='last'>214,322 Reactions
     <div  className='nam'><div className='av'><img className='av' src="https://v4.mui.com/static/images/avatar/1.jpg" alt="" /></div>Thomas   <div className='h'>5H</div> </div>
     <p className='pp'>Bitcoin is the world's first decentralized cryptocurrency – a type of digital asset that uses public-key cryptography to record, sign and send transactions     </p>
     <div className='fire'>
       🔥 23
👎2  </div>
   </div>
   <div className='nam'><img className='avvv' src="https://v4.mui.com/static/images/avatar/3.jpg" alt="" />Enni <div className='h'>15H</div></div>
   <p className='avv'>The live Ethereum price today is $1,785.88 USD with a 24-hour trading volume of $12,884,549,688 USD. We update our ETH to USD price in real-time.</p>
   <div className='fir'>
       🔥 123
👎21  </div><div className='ty' >
  
  <input className='inp' type="text"  />
  <button><SendIcon/></button></div></div>

   
   </div>
    
      
      
      
      
    </div>
   
    <div className='pi'>-1480.67% </div>
    
    <div className='a'><ArrowDownwardIcon/></div>
    <div className='bits'>
    <div className='bitc'>Bitcoin </div>
    <div>USD </div>
    <div>(BTC</div>
    <div>-</div>
    <div>USD)</div>
    </div>

   <div className='hel'>
    <div  className='home'>
      <SearchIcon/>
     
     <div className='noti'>
      <NotificationsIcon/>
      </div>
      <div className='name'>James_Thompson </div><div className='lo'><NoiseAwareIcon/></div>
     



    </div>
    
    <div className='bal'>Total Balance</div>
    <span className='pr'>$267,820.00</span>
    <div className='item'>My items</div>
    
    <div className='box'>
      <div className='boxxx'><div className='ar'><ArrowDropDownIcon/></div></div>
      <div className='in'>Investment
      <div ><b className='bo'> 87.2K</b></div></div>
      <div className='boxx'><div className='ar'><ArrowDropUpIcon/></div></div>
      <div className='in'>CaseBack
      <div ><b className='bo'> 87.2K</b></div></div>
    </div>
    <div className='con'>Convert</div>
    <div>
      <div type='number' className='input'
     ><div className='data'><b>$1000</b></div>
    
      
     </div>
     <div>
      <div type='number' className='input'><div>.09876</div></div>
      
    </div>
    <button className='but'>Convert</button>
    <div className='bl'><p className='upg'>Upgrade Your Plan</p>
    
     <h1 className='date'>{date}</h1>
     <div className='upg'>New Features</div>
     
    
       <img className='imgg' src="https://www.bing.com/th?id=OIP.ppMGOF5UHDeV_iGNhURk7gHaHa&w=90&h=88&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" /> 
       <div className='u'><div className='let'>Let's go <div className='arrow'> <ArrowCircleRightIcon/></div></div> </div>
    </div>
    </div>
   
    
    
    
    </div>
    
    </div>
  
    
  )
}

export default Navbarr
