import React from "react";

function BookingForm({ productData, setProductData }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(productData);
    };

    const handleChange = (event) => {
        if (event.target.type === "datetime-local")
            setProductData({ ...productData, date: event.target.value });
        if (event.target.name === "pool") updateActivities(event);
        if (event.target.name === "facial") updateActivities(event);
        if (event.target.name === "massage") updateActivities(event);
        if (event.target.name === "newspaper") updateObject(event);
        if (event.target.name === "breakfast") updateObject(event);
    };

    const updateObject = (event) => {
        const name = event.target.name;
        let objCopy = Object.assign({}, productData);
        objCopy.roomServices[name] = !productData.roomServices[name];
        setProductData(objCopy);
    };

    const updateActivities = (event) => {
        const name = event.target.name;
        let objCopy = Object.assign({}, productData);
        objCopy.spaActivities.includes(name)
            ? (objCopy.spaActivities = objCopy.spaActivities.filter(
                  (element) => element !== name
              ))
            : objCopy.spaActivities.push(name);
        setProductData(objCopy);
    };

    return (
        <form className="form-stack" onSubmit={handleSubmit}>
            <label htmlFor="date">When will you be arriving?</label>
            <input type="datetime-local" onChange={handleChange} />
            <section>
                <h3>Spa Activities</h3>
                <input
                    type="checkbox"
                    id="pool"
                    name="pool"
                    onChange={handleChange}
                />
                <label htmlFor="pool">Soak and Swim</label>
                <input
                    type="checkbox"
                    id="facial"
                    name="facial"
                    onChange={handleChange}
                />
                <label htmlFor="facial">Facial</label>
                <input
                    type="checkbox"
                    id="massage"
                    name="massage"
                    onChange={handleChange}
                />
                <label htmlFor="massage">Massage</label>
            </section>
            <section>
                <h3>Room Services</h3>
                <input
                    type="checkbox"
                    id="newspaper"
                    name="newspaper"
                    onChange={handleChange}
                />
                <label htmlFor="newspaper">Daily Newspaper</label>
                <input
                    type="checkbox"
                    id="breakfast"
                    name="breakfast"
                    onChange={handleChange}
                />
                <label htmlFor="breakfast">Breakfast</label>
            </section>
            <button type="submit">Book</button>
        </form>
    );
}

export default BookingForm;

//setProductData(productData => { ...productData, roomServices: { ...productData.roomServices, breakfast: (!productData.roomServices.breakfast) } })
