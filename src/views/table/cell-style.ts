export const getCellStyleWithColIndex = (colLastIndex) => {
    return ({row, columnIndex}) => {
        let score = row.score ?? row.total_goal
        if(columnIndex != colLastIndex && row.value){
            let ratio = score / Number(row.value)    
            if(ratio >= 0.8){
                return {"color": "#00796A","text-align": "center"}
            }
            else if(ratio >= 0.6){
                return {"color": "#FF7F00","text-align": "center"}
            }
            else{
                return {"color": "#C45656","text-align": "center"}
            }
        }
        else{
            return {"text-align": "center"}
        }
    }
}