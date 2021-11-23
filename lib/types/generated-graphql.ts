export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Item = {
  __typename?: 'item';
  id: Scalars['Int'];
  label: Scalars['String'];
};

export type Query = {
  __typename?: 'query';
  users: Array<User>;
};


export type QueryUsersArgs = {
  id?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'user';
  first_name: Scalars['String'];
  id: Scalars['Int'];
  items: Array<Item>;
};
