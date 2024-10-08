/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation Login($body: LoginUserDto!) {\n  login(body: $body) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      firstName\n      lastName\n      username\n      createdAt\n      updatedAt\n    }\n  }\n}": types.LoginDocument,
    "mutation Logout {\n  logout\n}": types.LogoutDocument,
    "mutation Register($body: CreatUserDto!) {\n  register(body: $body) {\n    errors {\n      field\n      message\n    }\n    id\n    firstName\n    lastName\n    createdAt\n  }\n}": types.RegisterDocument,
    "query Me {\n  me {\n    error {\n      code\n      message\n    }\n    id\n    firstName\n    lastName\n    username\n    createdAt\n    updatedAt\n  }\n}": types.MeDocument,
    "query Posts {\n  posts {\n    id\n    title\n    description\n    imageUrl\n    createdAt\n    updatedAt\n  }\n}": types.PostsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($body: LoginUserDto!) {\n  login(body: $body) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      firstName\n      lastName\n      username\n      createdAt\n      updatedAt\n    }\n  }\n}"): (typeof documents)["mutation Login($body: LoginUserDto!) {\n  login(body: $body) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      firstName\n      lastName\n      username\n      createdAt\n      updatedAt\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Logout {\n  logout\n}"): (typeof documents)["mutation Logout {\n  logout\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Register($body: CreatUserDto!) {\n  register(body: $body) {\n    errors {\n      field\n      message\n    }\n    id\n    firstName\n    lastName\n    createdAt\n  }\n}"): (typeof documents)["mutation Register($body: CreatUserDto!) {\n  register(body: $body) {\n    errors {\n      field\n      message\n    }\n    id\n    firstName\n    lastName\n    createdAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Me {\n  me {\n    error {\n      code\n      message\n    }\n    id\n    firstName\n    lastName\n    username\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query Me {\n  me {\n    error {\n      code\n      message\n    }\n    id\n    firstName\n    lastName\n    username\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Posts {\n  posts {\n    id\n    title\n    description\n    imageUrl\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query Posts {\n  posts {\n    id\n    title\n    description\n    imageUrl\n    createdAt\n    updatedAt\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;