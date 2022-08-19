gen:
	cp ../alack-api/graph/schema.graphqls src/graphql/schema.graphql
	yarn run graphql-codegen --config src/graphql/codegen-server.yaml
