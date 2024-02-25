export default function ErrorComponent() {
    return (
      <div className="ErrorComponent" style={{ paddingTop: "50px" }}>
        <h1 style={{ fontSize: "100px", color: "red", fontWeight: "bold" }}>
          404
        </h1>
        <h1 style={{ color: "red", fontWeight: "bold" }}> Page Not found </h1>
        <h4 style={{ fontWeight: "bold" }}>Oops Something went wrong!</h4>
      </div>
    );
  }