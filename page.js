import Link from 'next/link' 
import'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
    <>
    <center><h1>Welcome Fuckers!</h1></center>
    <br/>
    <center>
    <Link href="/"className="btn btn-primary">HOME</Link>   

    <Link href="about"className="btn btn-success">ABOUT </Link>   

    <Link href="service"className="btn btn-warning">SERVICE </Link>  

    <Link href="call"className="btn btn-danger">CONTACTS </Link>
    </center>
    <br/>
    </>
  );
}