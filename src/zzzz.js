

 <BrowserRouter>
 <div id="wrapper">
    <StudentContext.Provider value={{data,students,setStudents,teacher,setTeacher}}>
   <Sidebar />
   <div id="content-wrapper" class="d-flex flex-column">
     <div id="content">
       <Topbar />
       <div class="container-fluid">
        
         <div class="row">
         
         <Routes>
           <Route path="/dashboard" element={<Dashboard />}/>
           <Route path="/createstudent" element={<CreateStudent  />}/>
           <Route path="/createteacher" element={<CreateTeacher  />}/>
           <Route path="/editstudent/:id" element={<EditStudent  />}/>
           <Route path="/" element={<Dashboard />}/>

         </Routes>
         </div>
       </div>
     </div>
   </div>
   </StudentContext.Provider>
 </div>
 </BrowserRouter>