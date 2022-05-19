import GridViewIcon from '@mui/icons-material/GridView';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonIcon from '@mui/icons-material/Person';

export const SidebarData =[
    {
        icon: GridViewIcon,
        heading: "Dashboard",
    },
    {
        icon: ShoppingCartIcon,
        heading: "Transaction",
    },
    {
        icon: AnalyticsIcon,
        heading: "Reports",
    },
    {
        icon: PersonIcon,
        heading: "Profile",
    },
    
];

export const cardsData = [
    {
        title: "Balance",
        color:{
            backGround: "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue: 70,
        value: "$647,605.74",
        png: MonetizationOnIcon,
        series: [
         {
             name: "balance",
             data:[300,5000,4680,935,233,10000]
        }
        ]

    }

]