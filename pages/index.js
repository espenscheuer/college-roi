import * as React from 'react';
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import Head from 'next/head'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import useSWR from "swr";

var  universities  = [
	{
		id: 1,
		name: 'University of Washington'
	},
	{
		id: 2,
		name: 'University of California Berkeley'
	},
	{
		id: 3,
		name: 'Stanford'
	},
	{
		id: 4,
		name: 'Harvard'
	},
	{
		id: 5,
		name: 'Massachusetts Instituite of Technology'
	}
];

var  degrees  = [
	{
		id: 1,
		name: 'Bachelors'
	},
	{
		id: 2,
		name: 'Masters'
	},
	{
		id: 3,
		name: 'PHD'
	}
];

var  majors  = [
	{
		id: 1,
		name: 'Math'
	},
	{
		id: 2,
		name: 'Computer Science'
	},
	{
		id: 3,
		name: 'English'
	},
	{
		id: 4,
		name: 'History'
	}
];

export default function Home() {

  const [output, setOutput] = React.useState('');
  const [major, setMajor] = React.useState('');
  const [degree, setDegree] = React.useState('');
  const [university, setUniversity] = React.useState('');

  const fetcher = (url) => fetch(url).then((res) => res.json())

  const callApi = async () => {
    const headers = { 'Content-Type': 'application/json', 'major' : major, 'degree' : degree, 'university' : university }
    fetch('api/data', { headers })
        .then(response => setOutput(response))
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>College ROI</title>
      </Head>
      <Typography variant="h5">College ROI</Typography>
      <div>
        <FormControl sx={{ m: 1, minWidth: 360 }}>
          <InputLabel id="University"> University </InputLabel>
            <Select
              labelId="university"
              id="university"
              value={university}
              label="University"
              onChange={(event)=> setUniversity(event.target.value)}
            >
              {universities.map((record) =>
                <MenuItem key = {record.name} value={record.name}>{record.name}</MenuItem>
              )}
            </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 360 }}>
          <InputLabel id="Degree"> Degree </InputLabel>
            <Select
              labelId="degree"
              id="degree"
              value={degree}
              label="Degree"
              onChange={(event)=> setDegree(event.target.value)}
            >
              {degrees.map((record) =>
                <MenuItem key = {record.name} value={record.name}>{record.name}</MenuItem>
              )}
            </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 360 }}>
          <InputLabel id="major"> Major </InputLabel>
            <Select
              labelId="major"
              id="major"
              value={major}
              label="Major"
              onChange={(event)=> setMajor(event.target.value)}
            >
              {majors.map((record) =>
                <MenuItem key = {record.name} value={record.name}>{record.name}</MenuItem>
              )}
            </Select>
        </FormControl>
      </div>
      <Button variant="contained"
        onClick={() => {
          callApi()
        }}>
          Calculate ROI
      </Button>
      {output && <div>{(output)}</div>}
    </div>
  )
}
