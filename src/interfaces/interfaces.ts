interface AddressProps {
    street: string;
    num: string | number;
    province: string;
} 

export interface PersonProps {
    name: string;
    address: AddressProps;
    email: string;
    hobbies: string[];
}

