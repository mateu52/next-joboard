
"use client"
import { useEffect, useState } from "react";

type Review = {
    id: string;
    name: string;
}
type AirtableReviewResponseDto = {
    records: {
        id: string;
        fields: {
            name: string;
        }
    }[];
}
const Home = () => {
    const [ reviews, setReviews ] = useState<Review[] | undefined>(undefined);
    useEffect(() => {
        fetch('https://api.airtable.com/v0/appZLJE69lV4Vugrp/identable?view=default',{
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`
            }
        })
        .then((response) => response.json())
        .then((data: AirtableReviewResponseDto) => {
            const reviewsPlus: Review[] = [];
            data.records.forEach((elem) => {
                reviewsPlus.push({
                    id: elem.id,
                    name:elem.fields.name,
                })
            });
            setReviews(reviewsPlus)
        })
        .catch(error => console.log("error", error))
    },[])
    console.log(process.env.API_KEY,' hej')
    console.log(reviews, 'ok')
    return (
        <div>
        <h1>app1</h1>
        <ul>
            {reviews?.map((elem) => (
            <li key={elem.id}>
                <div>{elem.name}</div>
            </li>
        ))}
        </ul>
        </div>
    )
    
}

export default Home;