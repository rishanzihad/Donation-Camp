import Chart from 'react-apexcharts'
const Statics = () => {
    
    const getItem = JSON.parse(localStorage.getItem('donated'))
    let length =0
    if(getItem){
        length= getItem.length
    }
    const percentage = (12-length )
    return (
        <div className='flex justify-center items-center mt-10'>
        <Chart
        width={450}
        height={450}
        type='pie'
        series={[percentage,length]}
        options={{
            labels:['Total Donation', "Your Donation"],
            legend:{
                show:true,
                position:'bottom'
            },
            colors:['#FF444A', '#00C49F']
        }

        }
        />
        </div>
            
        
    );
};

export default Statics;