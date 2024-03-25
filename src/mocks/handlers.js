import { rest } from "msw"

const baseURL = "https://drf-api-wk-e66a91f679e3.herokuapp.com/"


export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                "pk":5,
                "username":"mogge",
                "email":"","first_name":"",
                "last_name":"","profile_id":5,
                "profile_image":"https://res.cloudinary.com/dcvd4jt7v/image/upload/v1/media/images/hero_image_dragon_1920_700_qmrkrg"
            })
        );
    }), 
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200))
    })
]