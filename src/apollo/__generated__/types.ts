import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Url: any;
};

export type Admin = {
  __typename?: 'Admin';
  email: Scalars['String'];
  id: Scalars['ID'];
  password: Scalars['String'];
  role: Role;
};

export type Applicant = User & {
  __typename?: 'Applicant';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  role: Role;
};

export type Application = {
  __typename?: 'Application';
  applicant: Applicant;
  id: Scalars['ID'];
  job: Job;
  status: ApplicationStatus;
};

export enum ApplicationStatus {
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED',
  Reviewing = 'REVIEWING',
  Submitted = 'SUBMITTED',
}

export type ApplicationStatuses = {
  __typename?: 'ApplicationStatuses';
  status?: Maybe<ApplicationStatus>;
};

export type Employer = User & {
  __typename?: 'Employer';
  company?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  role: Role;
};

export type Job = {
  __typename?: 'Job';
  contact: Employer;
  description: Scalars['String'];
  externalLink?: Maybe<Scalars['Url']>;
  id: Scalars['ID'];
  industry: Scalars['String'];
  position: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  applicationStatuses?: Maybe<Array<Maybe<ApplicationStatuses>>>;
  roles?: Maybe<Array<Maybe<Roles>>>;
  welcome?: Maybe<Welcome>;
};

export enum Role {
  Admin = 'ADMIN',
  Applicant = 'APPLICANT',
  Employer = 'EMPLOYER',
}

export type Roles = {
  __typename?: 'Roles';
  role?: Maybe<Role>;
};

export type User = {
  email: Scalars['String'];
  id: Scalars['ID'];
  password: Scalars['String'];
  role: Role;
};

export type Welcome = {
  __typename?: 'Welcome';
  message: Scalars['String'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Admin: ResolverTypeWrapper<Admin>;
  Applicant: ResolverTypeWrapper<Applicant>;
  Application: ResolverTypeWrapper<Application>;
  ApplicationStatus: ApplicationStatus;
  ApplicationStatuses: ResolverTypeWrapper<ApplicationStatuses>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Employer: ResolverTypeWrapper<Employer>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Job: ResolverTypeWrapper<Job>;
  Query: ResolverTypeWrapper<{}>;
  Role: Role;
  Roles: ResolverTypeWrapper<Roles>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Url: ResolverTypeWrapper<Scalars['Url']>;
  User: ResolversTypes['Applicant'] | ResolversTypes['Employer'];
  Welcome: ResolverTypeWrapper<Welcome>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Admin: Admin;
  Applicant: Applicant;
  Application: Application;
  ApplicationStatuses: ApplicationStatuses;
  Boolean: Scalars['Boolean'];
  Employer: Employer;
  ID: Scalars['ID'];
  Job: Job;
  Query: {};
  Roles: Roles;
  String: Scalars['String'];
  Url: Scalars['Url'];
  User: ResolversParentTypes['Applicant'] | ResolversParentTypes['Employer'];
  Welcome: Welcome;
};

export type AdminResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Admin'] = ResolversParentTypes['Admin']
> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Applicant'] = ResolversParentTypes['Applicant']
> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Application'] = ResolversParentTypes['Application']
> = {
  applicant?: Resolver<ResolversTypes['Applicant'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  job?: Resolver<ResolversTypes['Job'], ParentType, ContextType>;
  status?: Resolver<
    ResolversTypes['ApplicationStatus'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationStatusesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicationStatuses'] = ResolversParentTypes['ApplicationStatuses']
> = {
  status?: Resolver<
    Maybe<ResolversTypes['ApplicationStatus']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmployerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Employer'] = ResolversParentTypes['Employer']
> = {
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Job'] = ResolversParentTypes['Job']
> = {
  contact?: Resolver<ResolversTypes['Employer'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  externalLink?: Resolver<
    Maybe<ResolversTypes['Url']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  industry?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  applicationStatuses?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['ApplicationStatuses']>>>,
    ParentType,
    ContextType
  >;
  roles?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Roles']>>>,
    ParentType,
    ContextType
  >;
  welcome?: Resolver<Maybe<ResolversTypes['Welcome']>, ParentType, ContextType>;
};

export type RolesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Roles'] = ResolversParentTypes['Roles']
> = {
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UrlScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Url'], any> {
  name: 'Url';
}

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  __resolveType: TypeResolveFn<
    'Applicant' | 'Employer',
    ParentType,
    ContextType
  >;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
};

export type WelcomeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Welcome'] = ResolversParentTypes['Welcome']
> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Admin?: AdminResolvers<ContextType>;
  Applicant?: ApplicantResolvers<ContextType>;
  Application?: ApplicationResolvers<ContextType>;
  ApplicationStatuses?: ApplicationStatusesResolvers<ContextType>;
  Employer?: EmployerResolvers<ContextType>;
  Job?: JobResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Roles?: RolesResolvers<ContextType>;
  Url?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  Welcome?: WelcomeResolvers<ContextType>;
};
