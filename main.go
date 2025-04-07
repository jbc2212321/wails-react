package main

import (
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"

	blog2 "wails-react/blog"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	app := NewApp()
	blog := blog2.NewBlog()

	// Create application with options
	err := wails.Run(&options.App{
		Title:  "wails-react",
		Width:  1024,
		Height: 768,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
			blog,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
