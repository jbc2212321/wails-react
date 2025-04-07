package blog

import (
	"context"
	"wails-react/sqlite3"
)

type Blog struct {
	ctx context.Context
}

func (b *Blog) ListDocument(ctx context.Context) ([]*sqlite3.Document, error) {
	return sqlite3.ListDocument(ctx)
}

func NewBlog() *Blog {
	return &Blog{}
}
