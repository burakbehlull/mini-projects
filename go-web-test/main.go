package main

import (
	"html/template"
	"net/http"
	"github.com/gorilla/mux"
)

type Data struct {
	Message string
}
func renderTemplate(w http.ResponseWriter, tmpl string, data interface{}) {
	t, err := template.ParseFiles(tmpl)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	err = t.Execute(w, data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func main() {
	r := mux.NewRouter()

  //INDEX
	r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		data := Data{
			Message: "ANASAYFA",
		}
		renderTemplate(w, "index.html", data)
	})
  
  //ABOUT
	r.HandleFunc("/about", func(w http.ResponseWriter, r *http.Request) {
		data := Data{
			Message: "HAKKIMDA",
		}
		renderTemplate(w, "index.html", data)
	})

	http.ListenAndServe(":8080", r)
}
