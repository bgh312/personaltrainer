import React, { useState, useEffect } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import moment from 'moment'

export default function Trainingslist() {
    const [trainings, setTrainings] = useState([])

    useEffect(() => fetchData(), [])

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => {
          setTrainings(data.content.map(element => {
            const dateData = new Date(element.date)
            element.date = dateData.toLocaleDateString('fi-FI')
            element.date = moment(dateData).format('D.M.YYYY')
            return element
          }))
        })
      }

    const columns = [

        {
            Header: 'Date',
            accessor: 'date'
        },
        {
            Header: 'Duration',
            accessor: 'duration'
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        },
    ]

    return (
        <div>
            <ReactTable filterable={true} data={trainings} columns={columns} />
        </div>
    );
}