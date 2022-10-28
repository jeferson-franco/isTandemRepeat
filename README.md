# isTandemRepeat

Determine whether the given string can be obtained by one concatenation of some string to itself.

## Example

For `inputString = "tandemtandem"`, the output should be
`solution(inputString) = true`;
For `inputString = "qqq"`, the output should be
`solution(inputString) = false`;
For `inputString = "2w2ww"`, the output should be
`solution(inputString) = false`.

## Input/Output

-   [execution-time-limit] 4 seconds (js)

-   [input] string inputString

Guaranteed constraints:
`2 ≤ inputString.length ≤ 20`.

-   [output] boolean

`true` if `inputString` represents a string concatenated to itself, `false` otherwise.
