# My approch
was desigining with flex but we can also use grid here

stuck - > grid 
         grid auto flow ?
         grid is default to write 
         grid flow col -> will divide all the childerens in column 
         gap -1 -> space between within the grid 
         col-span-1 is to stretch horizontally the things 
         width was not happening big so i applied w-1/2

configurestore  -> it basically used for packed all the slices or bundles in one place it will be easier for developers and also it will readable . now you will ask what are slices ?
Slices is basically  a logic written to tell your changes happens and how it will happen . 
slice having the
 1. initial state of the slice  , 
 2. creating slice ( contains initial state and changes function you want to add )
 reducer so that it will trigger changes what you want
 3. exporting the actions 

 const counter = createSlice({
    name : initialState, 
    reducer :{
        increment : (state) => {
            state.value += 1
        }
    }
 })

 export {increment , decrement } = counter.actions;
 export default counterSlice.reducer

slice encapsulate the logic for a specific pieces . 
you can dispatch these after this 


one mistake which i was doing like i was making seperate buttons for every time but we should use props to make different buttons 


always while fetching do with one and then after that do with map with all
make it perfect for one and then scale it for large 

Before making WatchPage we have to do routing 


Homework 1 -> 
make session one completely by yourself and also you have to record yourself and explain the terms
and have a timer running them speak while you code . Very good skill 
