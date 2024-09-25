import UseTestCases from "./usetestcases";





const testCases=[
    {Input:[1,2],Output:3},
    {Input:[2,3],Output:5},
    {Input:[3,4],Output:7}
];

const TestCase=()=>{
    const {results,runTests}=UseTestCases(testCases);
    const solution=(a,b)=>a+b;


    return(
        <div>
        <h2>Test ur solution</h2>
        <button onClick={() => runTests(solution)}>Run tests</button>
        <div>
            <h3>Results:</h3>
            {results.map((result, index) => (
                <div key={index}>
                    <p>Testcase {index + 1}: {result.passed ? "passed" : "failed"}</p>
                    <p>Input:{result.Input.join(",")}</p>
                    <p>Excepted:{result.Output}</p>
                    <p>Output:{result.Output1}</p>
                </div>
            ))}
        </div>
    </div>
    
    )
}
export default TestCase