import { Breadcrumb } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PATH from '@/configs/paths/PATH';
import { getPathUrl } from '@/utils';
// import { useUnsaved } from '@/contexts/UnsavedContext';
import { UnsavedChangesModal } from '../AppModal/modals';
import './index.scss';

const formatSegment = (segment) =>
  segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const AppBreadcrumb = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // const { hasUnsaved } = useUnsaved();
  const pathUrl = getPathUrl(pathname);

  const onNavigate = (e, href, isClickable) => {
    e.preventDefault();
    if (!isClickable) return;

    // if (hasUnsaved) {
    //   UnsavedChangesModal(() => navigate(href));
    // } else {
      navigate(href);
    // }
  };

  const buildItem = (key, name, href, isLast, isDynamic) => {
    const label = isDynamic ? 'Detail' : formatSegment(name);
    const isClickable =
      !isLast && !isDynamic

    return {
      key,
      title: <span className="flex items-center gap-1">{label}</span>,
      href,
      className: classNames(
        isClickable ? 'breadcrumb-clickable' : 'breadcrumb-not-clickable',
        isLast && 'breadcrumb-last',
      ),
      onClick: (e) => onNavigate(e, href, isClickable),
    };
  };

  const breadcrumbItems = [
    buildItem('dashboard', 'Dashboard', PATH.HOME, false, false),
    ...pathUrl.map((item, index) =>
      buildItem(index, item.name, item.url, index === pathUrl.length - 1, item.isDynamicSegment)
    ),
  ];

  return <Breadcrumb className="app-breadcrumb flex items-center mt-16" items={breadcrumbItems} />;
};

export default AppBreadcrumb;
