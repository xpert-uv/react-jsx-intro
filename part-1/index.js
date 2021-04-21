const Index = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="yubraj" />
        <App />
    </div>
)

ReactDOM.render(<Index />, document.getElementById("root"))