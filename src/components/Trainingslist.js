import React, { useState, useEffect } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Button from '@material-ui/core/Button'
import moment from 'moment'

export default function Trainingslist() {
    const [trainings, setTrainings] = useState([])

    useEffect(() => fetchData(), [])

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => {
          setTrainings(data.map(element => {
            const dateData = new Date(element.date)
            //element.date = dateData.toLocaleDateString('fi-FI')
            element.dateFormatted = moment(dateData).format('D.M.YYYY')
            return element
          }))
        })
      }

      const deleteTraining = (id) => {
          console.log(id)
          const trainingLink = 'https://customerrest.herokuapp.com/api/trainings/'+id
        if (window.confirm('Do you want to delete the training?')) {
            fetch(trainingLink, {method: 'DELETE'})
            .then(res => fetchData())
            .catch(err => console.error(err))
        }
    }

    const columns = [

        {
            Header: 'Date',
            accessor: 'dateFormatted'
        },
        {
            Header: 'Duration',
            accessor: 'duration'
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            Header: 'First Name',
            accessor: 'customer.firstname'
        },
        {
            Header: 'Last Name',
            accessor: 'customer.lastname'
        },
        {
            sortable: false,
            filterable: false,
            width: 80,
            accessor: 'id',
            Cell: row => <Button variant="outlined" size="small" color="secondary" onClick={() => deleteTraining(row.value)}>Delete</Button>
        }
    ]

    return (
        <div id="trainings">
            <ReactTable filterable={true} data={trainings} columns={columns} />
        </div>
    )
}