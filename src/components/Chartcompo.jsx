import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const Chartcompo = ({expense, balance}) => {
  const data = {
    labels: ['Expense', 'Balance'],
    datasets: [
      {
        label: '$',
        data: [`${expense}`, `${balance}`],
        backgroundColor: [
          'rgba(255, 0, 0, 0.6)', // Changed to a darker red
          'rgba(54, 162, 235, 0.6)',
        ],
        borderColor: [
          'rgba(255, 0, 0, 1)', // Changed to a darker red
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div className='flex flex-col justify-center items-center mx-auto'>
      <div className='w-full pt-5'>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default Chartcompo;