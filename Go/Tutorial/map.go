package main
func main()  {
	var idMap map[int]string
	idMap = make(map[int]string)
	idMap[901] = "Apple"
	idMap[134] = "Banana"
	idMap[777] = "Tomato"
	println(idMap[134])

	println(idMap[0]) // 값이 nil혹은 zero value return
	// map key check
	val, exists := idMap[131]
	if !exists {
		println( "Not Exists")
	}else{
		println(val)
	}

	// for loop
	for key,val := range idMap {
		println(key,val)
	}




	
}