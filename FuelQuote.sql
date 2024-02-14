CREATE TABLE FuelQuote (
    orderID INT PRIMARY KEY,
    userID INT NOT NULL,
    gallonsRequested INT NOT NULL,
    deliveryAddress VARCHAR(255) NOT NULL,
    deliveryDate DATE NOT NULL,
    ppg FLOAT NOT NULL,
    totalPrice FLOAT NOT NULL
);