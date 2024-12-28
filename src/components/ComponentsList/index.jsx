import { useState, useLayoutEffect, useCallback } from 'react';

import SearchBar from '@/components/SearchBar'

import {
  Container,
  ListSection,
  CategoriesSection,
  CategoriesHeader,
  CategoriesList,
  CategoryItem,
  ComponentsSection,
  ComponentsHeader,
  ComponentsList,
  ComponentItem
} from './styled';

const ComponentList = ({ data }) => {
  const { Categories, Components } = data;

  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoriesToShow, setCategoriesToShow] = useState([]);
  const [componentsToShow, setComponentsToShow] = useState([]);

  const valueMatchSearchInput = useCallback((value) => {
    return value?.toLowerCase().includes(searchInput.toLowerCase())
  }, [searchInput]);

  const getCategoriesWithComponents = useCallback(() => {
    return Categories?.filter(category => {
      return Components?.some(component => {
        return component?.Categories?.includes(category)
          && valueMatchSearchInput(component?.Name);
      });
    });
  }, [Categories, Components, valueMatchSearchInput]);

  const getComponentsInCurrentCategory = useCallback(() => {
    return Components?.filter(component => {
      return component.Categories?.includes(selectedCategory)
        && valueMatchSearchInput(component?.Name);
    });
  }, [Components, selectedCategory, valueMatchSearchInput])

  useLayoutEffect(() => {
    const categoriesToShowList = getCategoriesWithComponents();
    const componentsToShowList = getComponentsInCurrentCategory();

    setCategoriesToShow(categoriesToShowList);
    setComponentsToShow(componentsToShowList);
  }, [getCategoriesWithComponents, getComponentsInCurrentCategory]);

  const categoryCount = (category) => {
    return Components.reduce((accumulator, current) => {
      if (current.Categories?.includes(category)
        && valueMatchSearchInput(current.Name)) {
        return accumulator + 1;
      }
      return accumulator;
    }, 0);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  }

  return (
    <Container>
      <SearchBar
        placeholder="Search"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)} />

      <ListSection>
        <CategoriesSection>
          <CategoriesHeader>Categories</CategoriesHeader>

          <CategoriesList>
            {categoriesToShow?.map(category => (
              <CategoryItem
                key={category}
                selected={selectedCategory === category}
                onClick={() => handleSelectCategory(category)}
              >
                {category} {categoryCount(category)}
              </CategoryItem>
            ))}
          </CategoriesList>
        </CategoriesSection>

        <ComponentsSection>
          <ComponentsHeader>Components</ComponentsHeader>

          <ComponentsList>
            {componentsToShow?.map(component => (
              <ComponentItem key={component.Name}>{component.Name}</ComponentItem>
            ))}
          </ComponentsList>
        </ComponentsSection>
      </ListSection>
    </Container>
  );
};

export default ComponentList;
