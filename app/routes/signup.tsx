import {lazy, Suspense} from "react";

const Account = lazy(()=>import("~/components/Account"));
export default function SignUp(){
    return <Suspense fallback={"Loading...."}>
        <Account formType={"signup"}/>
    </Suspense>
}