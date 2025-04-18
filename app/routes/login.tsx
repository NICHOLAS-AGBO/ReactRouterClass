import {lazy, Suspense} from "react";

const Account = lazy(()=>import("~/components/Account"));
export default function Login(){
    return <Suspense fallback={"Loading...."}>
        <Account/>
    </Suspense>
}