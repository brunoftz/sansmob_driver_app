export interface UserCityData {
    city: string;
}

let userCityData : UserCityData = {
    city: ""
}

export interface UserStateData {
    state: string;
}

let userStateData : UserStateData = {
    state: ""
}

export const CityAPI = {
    getCity: async (): Promise<UserCityData> =>{
        return new Promise(resolve =>{
            setTimeout(()=> resolve({ ...userCityData}), 500); 
        });
    },

    getState: async(): Promise<UserStateData>=>{
        return new Promise(resolve=>{
            setTimeout(()=> resolve({ ...userStateData}), 500)
        })
    },

    updateState: async(state:string): Promise<void> =>{
        return new Promise(resolve =>{
            setTimeout(()=> {

                userStateData.state = state;
                resolve();},500)
        })
    },

    updateCity: async(city: string): Promise<void> => {
        return new Promise(resolve =>{
            setTimeout(()=>{
                userCityData.city = city;
                resolve();
            }, 500);
        })
    }
}