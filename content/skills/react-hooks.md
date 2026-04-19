---
title: "React Hooks 最佳实践"
category: "前端"
tags: ["React", "Hooks"]
date: "2024-04-18"
---

# React Hooks 最佳实践

## useState

```typescript
const [count, setCount] = useState(0);
```

## useEffect

```typescript
useEffect(() => {
  // 副作用逻辑
  return () => {
    // 清理逻辑
  };
}, [dependencies]);
```

## 自定义 Hook

```typescript
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
}
```
