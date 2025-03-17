import "./home.css";
export default function Home() {
    return (
        <>
            <div className="home">
                <input className="input"
                    type="text" placeholder="Enter Your Email" />
                <button style={{ marginLeft: "10px" }}
                    className="btn btn-danger">Get Started</button>
            </div>
        </>
    )
}