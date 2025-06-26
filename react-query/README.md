# React Query Test Project

A modern Next.js 15 application demonstrating the power of TanStack Query (React Query) for efficient data fetching and state management.

## 🚀 Features

- **TanStack Query Integration**: Powerful data fetching, caching, and synchronization
- **Modern UI Components**: Built with Radix UI and styled with Tailwind CSS
- **TypeScript Support**: Full type safety throughout the application
- **Pagination**: Efficient paginated data loading
- **CRUD Operations**: Complete Create, Read, Update, Delete functionality
- **Error Handling**: Robust error handling with proper TypeScript types
- **Optimistic Updates**: Smooth user experience with cache invalidation
- **Responsive Design**: Mobile-first responsive layout

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Data Fetching**: TanStack Query v5
- **HTTP Client**: Axios
- **UI Components**: Radix UI
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Development**: ESLint, Turbopack

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-query
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
react-query/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with QueryClient provider
│   ├── page.tsx           # Main page component
│   └── another-page/      # Additional page example
├── components/            # Reusable UI components
│   └── ui/               # Shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       └── pagination.tsx
├── hooks/                 # Custom React hooks
│   └── useApi.ts         # TanStack Query API hook
├── utils/                 # Utility functions
│   └── api.ts            # Axios configuration
├── lib/                   # Library configurations
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## 🔧 Key Components

### useApi Hook

The `useApi` hook provides a complete data fetching solution with:

- **Paginated Data Fetching**: Efficient loading of large datasets
- **Individual Item Fetching**: Fetch single items by ID
- **CRUD Mutations**: Add, update, and delete operations
- **Automatic Cache Management**: Smart cache invalidation
- **Error Handling**: TypeScript-safe error handling

```typescript
const { useFetchData, useFetchById, useAddItem, useUpdateItem, useDeleteItem } = useApi<Post>("/posts", 5);
```

### Features Demonstrated

1. **Pagination**: Navigate through paginated data with built-in controls
2. **Real-time Updates**: Add new posts and see immediate updates
3. **Loading States**: Proper loading indicators during data fetching
4. **Error Handling**: Graceful error handling and user feedback
5. **Cache Management**: Efficient caching with automatic invalidation

## 🎯 Usage Examples

### Fetching Paginated Data

```typescript
const [page, setPage] = useState(1);
const { useFetchData } = useApi<Post>("/posts", 5);
const { data, isLoading, error } = useFetchData(page);
```

### Adding New Items

```typescript
const { useAddItem } = useApi<Post>("/posts");

const handleAddPost = () => {
  useAddItem.mutate({
    title: "New Post",
    body: "This is a new post",
  });
};
```

### Updating Items

```typescript
const { useUpdateItem } = useApi<Post>("/posts");

const handleUpdatePost = (id: number) => {
  useUpdateItem.mutate({
    id,
    item: { title: "Updated Title" }
  });
};
```

## 🚀 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🌟 TanStack Query Features Showcased

- **Query Caching**: Automatic caching with configurable stale time
- **Background Updates**: Keep data fresh with background refetching
- **Optimistic Updates**: Immediate UI updates before server confirmation
- **Error Retry**: Automatic retry on failed requests
- **Loading States**: Comprehensive loading and error state management
- **Pagination**: Efficient paginated data handling
- **Mutations**: Full CRUD operations with cache synchronization

## 📚 API Integration

This project uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as a mock REST API for demonstration purposes. The API provides:

- Posts data (`/posts`)
- Pagination support
- CRUD operations
- Realistic response times

## 🎨 UI Components

Built with modern, accessible components:

- **Button**: Interactive buttons with various styles
- **Card**: Content containers with consistent styling
- **Pagination**: Navigation controls for paginated data
- **Responsive Layout**: Mobile-first design approach

## 🔮 Future Enhancements

- [ ] Add infinite scrolling
- [ ] Implement real-time subscriptions
- [ ] Add data filtering and search
- [ ] Implement offline support
- [ ] Add more complex state management scenarios
- [ ] Add unit and integration tests

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue in the repository.

---

**Built with ❤️ using TanStack Query and Next.js**
