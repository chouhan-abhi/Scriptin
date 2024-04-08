import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Bored',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Entertained',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Focused',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Rested',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Slept',
    A: 85,
    B: 90,
    fullMark: 150,
  },
];

const RardarChartComponent = () => {
    return (
      <ResponsiveContainer width="100%" height="60%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
}

export default RardarChartComponent;
