package blog

import (
	"context"
	"wails-react/sqlite3"
)

type Blog struct {
	ctx context.Context
}

func (b *Blog) ListDocument() ([]*sqlite3.Document, error) {
	return sqlite3.ListDocument(b.ctx)
}

func (b *Blog) HelloWorld() string {
	return "Hello World"
}

func NewBlog() *Blog {
	return &Blog{ctx: context.Background()}
}
