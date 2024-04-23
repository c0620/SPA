import { useState, useEffect } from "react";
import { getTopRec } from "../api";

function Top() {
    const [meal, setMeal] = useState({});

    useEffect(() => {
        fetch("/top").then(
            res => res.json()
        ).then(
            data => {
                setMeal(data)
            }
        )
    }, []);

    return (
        <table className="centered white-text">
        <thead>
            <tr>
                <th>#</th>
                <th>Meal</th>
            </tr>
        </thead>
        <tbody>
            {Object.keys(meal).map((key) => {
                if (meal[key]) {
                    return (
                        <tr key={key}>
                            <td>{meal[key]}</td>
                            <td>{meal[key]}</td>
                        </tr>
                    );
                }
                return (
                    <>
                    <h1 className="white-text">Top is empty</h1>
                    </>
                );
                console.log(meal[key]);
            })}
        </tbody>
    </table>
        );
}

export {Top};