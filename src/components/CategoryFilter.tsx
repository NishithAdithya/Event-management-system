
import React from 'react';
import { Button } from '@/components/ui/button';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 py-4">
      <Button
        variant={selectedCategory === 'all' ? 'default' : 'outline'}
        className={selectedCategory === 'all' ? 'bg-event-primary' : ''}
        onClick={() => onSelectCategory('all')}
      >
        All Events
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'default' : 'outline'}
          className={selectedCategory === category ? 'bg-event-primary' : ''}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
