export interface user {
    address: address,
    id: number,
    email: string,
    username: string,
    password: string,
    name: userDetails,
    phone:string,
    __v: number
}

interface address{
    geolocation: geolocation,
    city: string,
    street: string,
    number: number,
    zipcode: string,
}

interface geolocation {
    lat: string,
    long: string
}

interface userDetails {
    firstname: string,
    lastname: string
}