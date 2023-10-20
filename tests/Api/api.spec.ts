import {test, expect, defineConfig} from '@playwright/test'
import users from '../../utils/users.json';

const env = process.env.NODE_ENV || 'qa';
const baseUrl= process.env.APIUrl || "";;
const { email, password } = users[env];

        
    test("Positive Login + Logout" ,async ({request}) => {
        const response = await request.post(`${baseUrl}/auth/login`,{
            data:{
                email:email, 
                password:password
            }
        })
        expect(response.status()).toBe(200)
        expect(response.json).toBeTruthy();

        const responseLogout = await request.post(`${baseUrl}/auth/logout`)
        expect(responseLogout.status()).toBe(200)
        expect(response.json).toBeTruthy();
    })

    test("Forbbiden Login" ,async ({request}) => {
        const response = await request.post(`${baseUrl}/auth/login`,{
            data:{
                email:"invalid@invalid.com",
                password:"invalid"
            }
        })
        expect(response.status()).toBe(403)
    })

    test("Invalid service" ,async ({request}) => {

        const response = await request.post(`${baseUrl}/auth/invalid`)
        expect(response.status()).toBe(404)
    })