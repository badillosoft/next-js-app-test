// route: /users/:id (/users/123, /users/456, ..)

import { useRouter } from "next/router";

export default function UserId() {
    const router = useRouter();

    console.log(router);

    return <span>{JSON.stringify(router.query)}</span>
}